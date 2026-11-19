import Link from "next/link";
import styles from "./register.module.css";

export default function register(){

    return (

        <div className="register">

            <section className={styles["hero"]}>

                <h1> ELETÉ </h1>

                <h2> LUJO • POTENCIA • PRESTIGIO </h2>


                <div className={styles["information-panel"]}>

                    <h3> Registro </h3>

                    <div className={styles["dual-space"]}>

                        <h4> Correo Electronico </h4>
                        <input 
                            className={styles["login-box"]}
                            type="email"

                        />

                    </div>




                    <div className={styles["dual-space"]}>

                        <h4> Contraseña </h4>
                        <input
                            className={styles["login-box"]} 
                            type="text"
                        />

                    </div>



                    <div className={styles["double-object"]}>
                        <Link href="/login" className="login-link">
                            <button className={styles["key-button"]}> Continuar </button>
                        </Link>

                    </div>                    

                </div>


            </section>


        </div>
    )
}