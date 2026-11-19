import FormRegistro from "./FormRegistro";
import styles from "./register.module.css";

export default function register(){

    return (

        <div className={styles["page"]}>

            <div className={styles["card"]}>

                <section className={styles["hero"]}>

                    <h1> ELETÉ </h1>

                    <h2> LUJO • POTENCIA • PRESTIGIO </h2>

                </section>


                <FormRegistro />

            </div>

        </div>
    )
}
