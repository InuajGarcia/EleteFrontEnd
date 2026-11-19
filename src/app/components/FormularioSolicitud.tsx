"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
    enviarAsesoria,
    enviarFinanciacion,
    enviarRepuesto,
} from "@/lib/api";
import styles from "./Solicitud.module.css";

type Tipo = "asesoria" | "financiacion" | "repuesto";

const TITULOS: Record<Tipo, string> = {
    asesoria: "SOLICITA TU ASESORÍA",
    financiacion: "SOLICITA TU FINANCIACIÓN",
    repuesto: "SOLICITA ESTE REPUESTO",
};

const EXITO: Record<Tipo, string> = {
    asesoria: "¡Solicitud enviada! Un especialista te contactará pronto.",
    financiacion: "¡Solicitud enviada! Un asesor revisará tu financiación y te contactará.",
    repuesto: "¡Solicitud enviada! Te contactaremos con la disponibilidad del repuesto.",
};

// Formulario de solicitud. Segun el tipo hace POST /asesoria, /financiacion o /repuestos
// y manda los campos tal como los pide el backend (contrato de SwaggerHub).
export default function FormularioSolicitud({
    tipo,
    repuesto,
}: {
    tipo: Tipo;
    repuesto?: string;
}) {
    // El carro puede venir en la direccion: /asesoria?vehiculo=Ferrari SF90 Stradale
    const vehiculoInicial = useSearchParams().get("vehiculo") ?? "";

    const [estado, setEstado] = useState<"" | "enviando" | "ok" | "error">("");

    async function enviar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const d = new FormData(form);

        // Lee un campo de texto; si esta vacio devuelve undefined (el backend lo trata como opcional)
        const texto = (campo: string) => {
            const v = String(d.get(campo) ?? "").trim();
            return v === "" ? undefined : v;
        };
        const numero = (campo: string) => {
            const v = texto(campo);
            return v === undefined ? undefined : Number(v);
        };

        const base = {
            nombre: texto("nombre") ?? "",
            telefono: texto("telefono") ?? "",
            email: texto("email"),
            mensaje: texto("mensaje"),
        };

        setEstado("enviando");
        try {
            if (tipo === "asesoria") {
                await enviarAsesoria({ ...base, vehiculo: texto("vehiculo") });
            } else if (tipo === "financiacion") {
                await enviarFinanciacion({
                    ...base,
                    vehiculo: texto("vehiculo") ?? "",
                    ingresos: numero("ingresos"),
                    cuotaInicial: numero("cuotaInicial"),
                    plazo: numero("plazo"),
                });
            } else {
                await enviarRepuesto({
                    ...base,
                    vehiculo: texto("vehiculo") ?? "",
                    repuesto: texto("repuesto") ?? "",
                });
            }
            form.reset();
            setEstado("ok");
        } catch {
            setEstado("error");
        }
    }

    return (
        <form className={styles["formulario"]} onSubmit={enviar}>

            <h2>{TITULOS[tipo]}</h2>

            <div className={styles["fila"]}>
                <label>
                    NOMBRE COMPLETO
                    <input name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre completo" />
                </label>

                <label>
                    TELÉFONO
                    <input name="telefono" type="tel" required autoComplete="tel" placeholder="+57 300 000 0000" />
                </label>
            </div>

            <label>
                EMAIL (OPCIONAL)
                <input name="email" type="email" autoComplete="email" placeholder="tucorreo@email.com" />
            </label>

            {tipo === "repuesto" && (
                <label>
                    REPUESTO
                    <input name="repuesto" type="text" required readOnly defaultValue={repuesto} />
                </label>
            )}

            <label>
                {tipo === "asesoria" ? "VEHÍCULO DE INTERÉS (OPCIONAL)" : "VEHÍCULO"}
                <input
                    name="vehiculo"
                    type="text"
                    required={tipo !== "asesoria"}
                    defaultValue={vehiculoInicial}
                    placeholder="Ej. Ferrari SF90 Stradale"
                />
            </label>

            {tipo === "financiacion" && (
                <>
                    <div className={styles["fila"]}>
                        <label>
                            INGRESOS MENSUALES (USD)
                            <input name="ingresos" type="number" min="0" step="any" placeholder="Ej. 8000" />
                        </label>

                        <label>
                            CUOTA INICIAL (USD)
                            <input name="cuotaInicial" type="number" min="0" step="any" placeholder="Ej. 50000" />
                        </label>
                    </div>

                    <label>
                        PLAZO (MESES)
                        <input name="plazo" type="number" min="1" step="1" placeholder="Ej. 48" />
                    </label>
                </>
            )}

            <label>
                MENSAJE (OPCIONAL)
                <textarea name="mensaje" rows={4} placeholder="¿Algo más que debamos saber?" />
            </label>

            <button
                type="submit"
                className={styles["boton"]}
                disabled={estado === "enviando"}
            >
                {estado === "enviando" ? "ENVIANDO..." : "ENVIAR SOLICITUD"} <span aria-hidden="true">➤</span>
            </button>

            {estado === "ok" && <p className={styles["mensaje-ok"]}>{EXITO[tipo]}</p>}
            {estado === "error" && (
                <p className={styles["mensaje-error"]}>
                    No se pudo enviar la solicitud. Revisa los datos e intenta de nuevo.
                </p>
            )}

        </form>
    );
}
