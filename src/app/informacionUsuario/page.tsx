import Link from "next/link";
import styles from "./informacionUsuario.module.css";

/* Contenido y texto de la pagina */

export default function informacionUsuario() {

    return (

        <div className ="informacionUsuario">

            <section className={styles["hero"]}>

                <div className={styles["information-panel"]}>
                
                    <h2> Informacion de Usuario </h2>


                    <div className={styles["profile-picture"]}> </div>                    


                    <h1 className={styles["textoInformacion"]}>
                    Correo Electronico:
                    </h1>

                    <h1 className={styles["textoInformacion"]}>
                    Nombre y Apellidos: 
                    </h1>

                    <h1 className={styles["textoInformacion"]}>
                    Contraseña: 
                    </h1>

                    <h1 className={styles["textoInformacion"]}>
                    Numero Telefonico:
                    </h1>

                </div>


            </section>


        </div>

    )

}