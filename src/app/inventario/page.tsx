import { Suspense } from "react";
import Link from "next/link";
import { getDestacados } from "@/lib/api";
import TarjetaCarro from "./TarjetaCarro";
import styles from "./inventario.module.css";

// Pide al backend los carros destacados: GET /vehiculos/destacados (MongoDB)
async function Catalogo() {
    let carros;
    try {
        carros = (await getDestacados()).slice(0, 4);
    } catch {
        return <p className={styles["mensaje"]}>No se pudo conectar con el servidor. Intenta de nuevo.</p>;
    }

    if (carros.length === 0) {
        return <p className={styles["mensaje"]}>Todavía no hay vehículos destacados.</p>;
    }

    return (
        <div className={styles["catalogue"]}>
            {carros.map((c) => (
                <TarjetaCarro key={c.id} c={c} />
            ))}
        </div>
    );
}

export default function inventario() {
    return (
        <div className="inventario">
            <section className={styles["hero"]}>
                <div className={styles["information-panel"]}>

                    <div className={styles["items-spacing"]}>
                        <h1> VEHÍCULOS </h1>
                        <h2> DESTACADOS </h2>
                    </div>

                    <h3> LUJO • POTENCIA • PRESTIGIO </h3>

                    {/* Mientras llegan los datos se muestra "Cargando..." */}
                    <Suspense fallback={<p className={styles["mensaje"]}>Cargando vehículos...</p>}>
                        <Catalogo />
                    </Suspense>

                    <Link href="/inventario/todos" className={styles["ver-todo"]}>
                        VER TODO EL INVENTARIO <span aria-hidden="true">➜</span>
                    </Link>

                </div>
            </section>
        </div>
    )
}
