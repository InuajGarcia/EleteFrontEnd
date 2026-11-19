import Link from "next/link";
import styles from "./inventario.module.css";

export default function inventario() {

    return (

        <div className="inventario">

            <section className={styles["hero"]}>

                <div className={styles["information-panel"]}>



                    <div className={styles["items-spacing"]}>

                        <h1> VEHICULOS </h1>
                        <h2> DESTACADOS </h2>

                    </div>

                    <h3> LUJO • POTENCIA • PRESTIGIO </h3>  

                    
                    <div className={styles["catalogue"]}>

                        <div className={styles["car-container"]}>

                        </div>

                        <div className={styles["car-container"]}>

                        </div>

                        <div className={styles["car-container"]}>

                        </div>

                        <div className={styles["car-container"]}>

                        </div>

                    </div>


                </div>

            </section>

        </div>

    )
}