"use client";

import { useState } from "react";
import { enviarContacto } from "@/lib/api";
import styles from "./contactanos.module.css";

// Formulario de contacto: al enviar hace POST /contacto al backend (MongoDB).
export default function FormularioContacto() {
    const [estado, setEstado] = useState<"" | "enviando" | "ok" | "error">("");

    async function enviar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const datos = new FormData(form);
        const telefono = String(datos.get("telefono") ?? "").trim();

        setEstado("enviando");
        try {
            await enviarContacto({
                nombre: String(datos.get("nombre") ?? "").trim(),
                email: String(datos.get("email") ?? "").trim(),
                mensaje: String(datos.get("mensaje") ?? "").trim(),
                ...(telefono ? { telefono } : {}),
            });
            form.reset();
            setEstado("ok");
        } catch {
            setEstado("error");
        }
    }

    return (
        <form className={styles["contact-form"]} onSubmit={enviar}>

            <h2>ENVÍANOS UN MENSAJE</h2>

            <div className={styles["form-row"]}>
                <label>
                    NOMBRE COMPLETO
                    <input name="nombre" type="text" required placeholder="Tu nombre completo" />
                </label>

                <label>
                    EMAIL
                    <input name="email" type="email" required placeholder="tucorreo@email.com" />
                </label>
            </div>

            <label>
                TELÉFONO
                <input name="telefono" type="tel" placeholder="+57 300 000 0000" />
            </label>

            <label>
                MENSAJE
                <textarea name="mensaje" rows={4} required placeholder="¿En qué podemos ayudarte?" />
            </label>

            <img
                className={styles["form-logo"]}
                src="/images/eleteLogo.jpg"
                alt="Eleté"
            />

            <button
                type="submit"
                className={styles["gold-button"]}
                disabled={estado === "enviando"}
            >
                {estado === "enviando" ? "ENVIANDO..." : "ENVIAR MENSAJE"} <span aria-hidden="true">➤</span>
            </button>

            {estado === "ok" && <p>¡Mensaje enviado! Te contactaremos pronto.</p>}
            {estado === "error" && (
                <p>No se pudo enviar el mensaje. Revisa los datos e intenta de nuevo.</p>
            )}

        </form>
    );
}
