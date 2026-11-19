import Link from "next/link";
import styles from "./login.module.css";

export default function login(){

    return (

        <div className={styles["page"]}>

            <div className={styles["card"]}>

                <section className={styles["hero"]}>

                    <h1> ELETÉ </h1>

                    <h2> LUJO • POTENCIA • PRESTIGIO </h2>

                </section>


                <form className={styles["information-panel"]}>

                    <h3> Iniciar Sesión </h3>

                    <div className={styles["dual-space"]}>

                        <label htmlFor="correo"> Correo Electrónico </label>
                        <input
                            id="correo"
                            className={styles["login-box"]}
                            type="email"
                            autoComplete="email"
                        />

                    </div>

                    <div className={styles["dual-space"]}>

                        <label htmlFor="clave"> Contraseña </label>
                        <input
                            id="clave"
                            className={styles["login-box"]}
                            type="password"
                            autoComplete="current-password"
                        />

                    </div>

                    <div className={styles["double-object"]}>

                        <p className={styles["registro-texto"]}>
                            ¿No tienes cuenta todavía?{" "}
                            <Link href="/register">Regístrate</Link> aquí
                        </p>

                        <Link href="/inicio" className={styles["key-button"]}>
                            Continuar
                        </Link>

                    </div>

                </form>

            </div>

        </div>
    )
}
