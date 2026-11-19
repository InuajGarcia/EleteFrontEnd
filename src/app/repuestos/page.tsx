import { Suspense } from "react";
import CatalogoRepuestos from "./CatalogoRepuestos";
import styles from "./repuestos.module.css";

export default function repuestos () {

    return(

        <section className="repuestos">

            <section className={styles["hero"]}>

                {/* Suspense: el catalogo lee el carro desde la direccion (?vehiculo=...) */}
                <Suspense fallback={<p className={styles["ayuda"]}>Cargando...</p>}>
                    <CatalogoRepuestos />
                </Suspense>

            </section>

        </section>

    )

}
