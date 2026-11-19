import Link from "next/link";
import styles from "./vehiculo.module.css";

export default function vehiculo() {
    return (
        <div className="vehiculo">
            <section className={styles["hero"]}>

                <div className={styles["information-panel"]}>

                    <div className={styles["double-object"]}>
                        <h1> Nombre del carro </h1>
                        <div className={styles["flag"]}></div>
                    </div>

                    <h2> Informacion del carro </h2>
                    

                    <div className={styles["double-object"]}>
                        <button className={styles["gold-button"]}> Comprar </button>
                        <button className={styles["gold-button"]}> Ver Repuestos </button>
                    </div>

                </div>


            </section> 


        </div>
    )
}