import Link from "next/link";
import styles from "./register.module.css";

export default function register(){

    return (

        <div className={styles["page"]}>

            <div className={styles["card"]}>

                <section className={styles["hero"]}>

                    <h1> ELETÉ </h1>

                    <h2> LUJO • POTENCIA • PRESTIGIO </h2>

                </section>


                <form className={styles["information-panel"]}>

                    <h3> Registro </h3>

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
                            autoComplete="new-password"
                        />

                    </div>

                    <div className={styles["double-object"]}>

                        <span />

                        <Link href="/login" className={styles["key-button"]}>
                            Iniciar Sesión
                        </Link>

                    </div>

                </form>

            </div>

        </div>
    )
}
