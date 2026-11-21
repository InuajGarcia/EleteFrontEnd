"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import FormularioSolicitud from "../components/FormularioSolicitud";
import { repuestosDe, type Repuesto } from "./catalogo";
import ImagenCarro from "../ImagenCarro";
import styles from "./repuestos.module.css";

// Lista de repuestos. "Agregar" abre el formulario para pedir ese repuesto.
export default function CatalogoRepuestos() {
    // El carro viene de la pagina del vehiculo: /repuestos?vehiculo=Ferrari SF90 Stradale
    const parametros = useSearchParams();
    const vehiculo = parametros.get("vehiculo");
    const idCarro = parametros.get("id");

    const lista = repuestosDe(vehiculo);
    const [elegido, setElegido] = useState<Repuesto | null>(null);
    const formulario = useRef<HTMLDivElement>(null);

    function agregar(r: Repuesto) {
        setElegido(r);
        // Espera a que aparezca el formulario y baja hasta el
        setTimeout(() => formulario.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }

    return (
        <>
            <div className={styles["text-container"]}>
                <h1> REPUESTOS </h1>
                <h2> {vehiculo ?? "Para todos los vehículos"} </h2>
                {idCarro && vehiculo && (
                    <div className={styles["foto-carro"]}>
                        <ImagenCarro id={idCarro} alt={vehiculo} modelo={vehiculo} />
                    </div>
                )}
            </div>

            <div className={styles["information-panel"]}>

                <div className={styles["catalogue"]}>
                    {lista.map((r) => (
                        <div
                            key={r.id}
                            className={`${styles["spare-parts-container"]} ${elegido?.id === r.id ? styles["elegido"] : ""}`}
                        >
                            <img
                                src={r.imagen}
                                alt={r.nombre}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                className={styles["parte-icono"]}
                                onError={(e) => {
                                    // 1) archivo local  2) enlace original  3) icono
                                    const img = e.currentTarget;
                                    if (!img.dataset.paso) { img.dataset.paso = "1"; img.src = r.respaldo; }
                                    else if (img.dataset.paso === "1") { img.dataset.paso = "2"; img.src = "/images/icono-repuesto.svg"; }
                                }}
                            />

                            <p className={styles["parte-dato"]}>
                                <small>CATEGORÍA</small>
                                {r.categoria}
                            </p>
                            <p className={styles["parte-dato"]}>
                                <small>NOMBRE</small>
                                {r.nombre}
                            </p>
                            <p className={styles["parte-precio"]}>
                                $ {r.precio.toLocaleString("en-US")} USD
                            </p>

                            <button
                                type="button"
                                className={styles["agregar"]}
                                onClick={() => agregar(r)}
                            >
                                AGREGAR <span aria-hidden="true">➜</span>
                            </button>
                        </div>
                    ))}
                </div>

                <div ref={formulario} className={styles["solicitud"]}>
                    {elegido ? (
                        // key: al cambiar de repuesto el formulario se reinicia
                        <FormularioSolicitud
                            key={elegido.id}
                            tipo="repuesto"
                            repuesto={elegido.nombre}
                        />
                    ) : (
                        <p className={styles["ayuda"]}>
                            Elige un repuesto con el botón <strong>Agregar</strong> para solicitarlo.
                        </p>
                    )}
                </div>

            </div>
        </>
    );
}
