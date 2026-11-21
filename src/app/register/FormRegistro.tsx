"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registrarUsuario } from "@/lib/usuario";
import styles from "./register.module.css";

export default function FormRegistro() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function registrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const correo = String(d.get("correo") ?? "").trim();

        const clave = String(d.get("clave") ?? "");
        setError("");
        setEnviando(true);
        try {
            await registrarUsuario(correo, clave);
            router.push("/inicio");
        } catch (err) {
            setError(err instanceof Error ? err.message : "No se pudo registrar.");
            setEnviando(false);
        }
    }

    return (
        <form className={styles["information-panel"]} onSubmit={registrar}>

            <h3> Registro </h3>

            <div className={styles["dual-space"]}>

                <label htmlFor="correo"> Correo Electrónico </label>
                <input
                    id="correo"
                    name="correo"
                    className={styles["login-box"]}
                    type="email"
                    required
                    autoComplete="email"
                />

            </div>

            <div className={styles["dual-space"]}>

                <label htmlFor="clave"> Contraseña </label>
                <input
                    id="clave"
                    name="clave"
                    className={styles["login-box"]}
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                />

            </div>

            {error && <p className={styles["error"]}>{error}</p>}

            <div className={styles["double-object"]}>

                <span />

                <button type="submit" className={styles["key-button"]} disabled={enviando}>
                    {enviando ? "Registrando..." : "Registrarme"}
                </button>

            </div>

        </form>
    );
}
