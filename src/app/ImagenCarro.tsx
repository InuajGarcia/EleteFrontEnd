"use client";

import { useEffect, useRef, useState } from "react";

const REEMPLAZO = "/images/carro-placeholder.svg";

/* Fotos que ya estan en el proyecto, por marca y modelo.
   Si el carro no tiene una foto propia (carros/<id>.jpg), se usa esta; y si
   tampoco hay, se muestra la imagen de reemplazo. */
const FOTOS_POR_MODELO: Record<string, string> = {
    "porsche 911 turbo s": "/images/paginaPrincipal1.png",
    "ferrari sf90 stradale": "/images/paginaPrincipal2.png",
    "lamborghini revuelto": "/images/paginaPrincipal3.png",
    "mclaren 720s": "/images/paginaPrincipal4.png",
    "aston martin db12": "/images/paginaPrincipal5.png",
};

/* Foto de un carro: carros/<id>.jpg -> foto por modelo -> imagen de reemplazo */
export default function ImagenCarro({
    id,
    alt,
    modelo,
}: {
    id: string;
    alt: string;
    modelo?: string;
}) {
    const propia = `/images/carros/${id}.jpg`;
    const porModelo = modelo ? FOTOS_POR_MODELO[modelo.toLowerCase()] : undefined;

    // Orden de intentos: foto propia, foto por modelo, reemplazo
    const opciones = [propia, ...(porModelo ? [porModelo] : []), REEMPLAZO];

    const [intento, setIntento] = useState(0);
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Si la imagen fallo antes de que React la "hidratara", onError no se entera
        const img = ref.current;
        if (img && img.complete && img.naturalWidth === 0 && intento < opciones.length - 1) {
            setIntento(intento + 1);
        }
    }, [intento, opciones.length]);

    return (
        <img
            ref={ref}
            src={opciones[intento]}
            alt={alt}
            onError={() => {
                if (intento < opciones.length - 1) setIntento(intento + 1);
            }}
        />
    );
}
