"use client";

import { useRouter } from "next/navigation";
import { iniciarSesion } from "@/lib/usuario";
import styles from "./register.module.css";

export default function FormRegistro() {
    const router = useRouter();

    function registrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const correo = String(d.get("correo") ?? "").trim();

        iniciarSesion(correo);
        router.push("/inicio");
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

            <div className={styles["double-object"]}>

                <span />

                <button type="submit" className={styles["key-button"]}>
                    Registrarme
                </button>

            </div>

        </form>
    );
}
