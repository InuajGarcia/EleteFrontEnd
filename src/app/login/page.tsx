import FormLogin from "./FormLogin";
import styles from "./login.module.css";

export default function login(){

    return (

        <div className={styles["page"]}>

            <div className={styles["card"]}>

                <section className={styles["hero"]}>

                    <h1> ELETÉ </h1>

                    <h2> LUJO • POTENCIA • PRESTIGIO </h2>

                </section>


                <FormLogin />

            </div>

        </div>
    )
}
