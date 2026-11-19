import Link from "next/link";
import styles from "./repuestos.module.css";

export default function repuestos () {

    return(

        <section className="repuestos">

            <section className={styles["hero"]}>

                <div className={styles["text-container"]}>

                    <h1> Repuestos </h1>

                    <h2> Nombre del carro </h2>

                </div>

                <div className={styles["information-panel"]}>

                    <div className={styles["catalogue"]}>

                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>

                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>
                        <div className={styles["spare-parts-container"]}></div>

                </div>

                </div>

            </section>


        </section>

    )
    
}