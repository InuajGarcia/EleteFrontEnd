import PerfilUsuario from "./PerfilUsuario";
import styles from "./informacionUsuario.module.css";

/* Contenido y texto de la pagina */

export default function informacionUsuario() {

    return (

        <div className ="informacionUsuario">

            <section className={styles["hero"]}>

                <PerfilUsuario />

            </section>


        </div>

    )

}
