import { Suspense } from "react";
import Link from "next/link";
import { getDestacados, formatoPrecio } from "@/lib/api";
import ImagenCarro from "../ImagenCarro";
import styles from "./inventario.module.css";

// Pide al backend los carros destacados: GET /vehiculos/destacados (MongoDB)
async function Catalogo() {
    let carros;
    try {
        carros = (await getDestacados()).slice(0, 4);
    } catch {
        return <p>No se pudo conectar con el servidor. Intenta de nuevo.</p>;
    }

    if (carros.length === 0) {
        return <p>Todavía no hay vehículos destacados.</p>;
    }

    return (
        <div className={styles["catalogue"]}>
            {carros.map((c) => (
                <Link
                    key={c.id}
                    href={`/vehiculo/${c.id}`}
                    className={styles["car-container"]}
                >
                    <ImagenCarro id={c.id} alt={`${c.marca} ${c.modelo}`} />
                    <h4>{c.marca} {c.modelo}</h4>
                    <h5>{formatoPrecio(c)}</h5>
                </Link>
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
                        <h1> VEHICULOS </h1>
                        <h2> DESTACADOS </h2>
                    </div>

                    <h3> LUJO • POTENCIA • PRESTIGIO </h3>

                    {/* Mientras llegan los datos se muestra "Cargando..." */}
                    <Suspense fallback={<p>Cargando vehículos...</p>}>
                        <Catalogo />
                    </Suspense>

                </div>
            </section>
        </div>
    )
}
