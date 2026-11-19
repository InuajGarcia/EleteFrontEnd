import Link from "next/link";
import styles from "./login.module.css";

export default function login(){

    return (

        <div className="login">

            <section className={styles["hero"]}>

                <h1> ELETÉ </h1>

                <h2> LUJO • POTENCIA • PRESTIGIO </h2>


                <div className={styles["information-panel"]}>

                    <h3> Iniciar Sesion </h3>

                    <div className={styles["dual-space"]}>

                        <h4> Correo Electrónico </h4>
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

                        <h5> No tienes cuenta todavía? </h5>

                        <Link href="/register" className="register-link">
                            <h6> Regístrate </h6>
                        </Link>
                        
                        <h5> aquí </h5>

                        <Link href="/inicio" className="inicio-link">
                            <button className={styles["key-button"]}> Continuar </button>
                        </Link>
                        
                    </div>                    

                </div>


            </section>


        </div>
    )
}