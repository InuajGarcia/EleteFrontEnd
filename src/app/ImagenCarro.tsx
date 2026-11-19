"use client";

import { useEffect, useRef, useState } from "react";

const REEMPLAZO = "/images/carro-placeholder.svg";

// Muestra la foto /images/carros/VEH-001.jpg (según el id del carro).
// Si la foto no existe, muestra una imagen de reemplazo, así nunca se ve rota.
export default function ImagenCarro({ id, alt }: { id: string; alt: string }) {
  const [src, setSrc] = useState(`/images/carros/${id}.jpg`);
  const ref = useRef<HTMLImageElement>(null);

  // Si el navegador ya falló al cargar la foto antes de que React estuviera
  // listo, onError no se dispara: por eso se revisa también al montar.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0 && src !== REEMPLAZO) {
      setSrc(REEMPLAZO);
    }
  }, [src]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => {
        if (src !== REEMPLAZO) setSrc(REEMPLAZO);
      }}
    />
  );
}
