"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { iniciarSesion } from "@/lib/usuario";
import styles from "./login.module.css";

export default function FormLogin() {
    const router = useRouter();
    const [error, setError] = useState("");

    function entrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const correo = String(d.get("correo") ?? "").trim();
        const clave = String(d.get("clave") ?? "");

        if (!correo || !clave) {
            setError("Escribe tu correo y tu contraseña.");
            return;
        }

        iniciarSesion(correo);
        router.push("/inicio");
    }

    return (
        <form className={styles["information-panel"]} onSubmit={entrar}>

            <h3> Iniciar Sesión </h3>

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
                    autoComplete="current-password"
                />

            </div>

            {error && <p className={styles["error"]}>{error}</p>}

            <div className={styles["double-object"]}>

                <p className={styles["registro-texto"]}>
                    ¿No tienes cuenta todavía?{" "}
                    <Link href="/register">Regístrate</Link> aquí
                </p>

                <button type="submit" className={styles["key-button"]}>
                    Continuar
                </button>

            </div>

        </form>
    );
}
