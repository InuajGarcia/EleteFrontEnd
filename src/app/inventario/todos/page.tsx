import { Suspense } from "react";
import Link from "next/link";
import { getVehiculos } from "@/lib/api";
import ListaInventario from "./ListaInventario";
import styles from "../inventario.module.css";

// Pide todos los carros al backend: GET /vehiculos (MongoDB)
async function Todos() {
    let carros;
    try {
        carros = await getVehiculos();
    } catch {
        return <p className={styles["mensaje"]}>No se pudo conectar con el servidor. Intenta de nuevo.</p>;
    }

    return <ListaInventario carros={carros} />;
}

export default function inventarioCompleto() {
    return (
        <div className="inventario">
            <section className={styles["hero"]}>
                <div className={styles["information-panel"]}>

                    <div className={styles["items-spacing"]}>
                        <h1> TODO EL </h1>
                        <h2> INVENTARIO </h2>
                    </div>

                    <h3> LUJO • POTENCIA • PRESTIGIO </h3>

                    <Suspense fallback={<p className={styles["mensaje"]}>Cargando vehículos...</p>}>
                        <Todos />
                    </Suspense>

                    <Link href="/inventario" className={styles["ver-todo"]}>
                        <span aria-hidden="true">←</span> VOLVER A DESTACADOS
                    </Link>

                </div>
            </section>
        </div>
    )
}
