import { Suspense } from "react";
import Link from "next/link";
import { getVehiculo, formatoPrecio } from "@/lib/api";
import ImagenCarro from "../../ImagenCarro";
import styles from "../vehiculo.module.css";

// Detalle de un carro: GET /vehiculos/{id}
async function Detalle({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let carro;
    try {
        carro = await getVehiculo(id);
    } catch {
        return (
            <div className={styles["information-panel"]}>
                <h1> Vehículo no encontrado </h1>
                <Link href="/inventario"> Volver al inventario </Link>
            </div>
        );
    }

    return (
        <div className={styles["information-panel"]}>

            <div className={styles["double-object"]}>
                <h1> {carro.marca} {carro.modelo} </h1>
                <div className={styles["flag"]}></div>
            </div>

            <ImagenCarro id={carro.id} alt={`${carro.marca} ${carro.modelo}`} />

            <h2> Informacion del carro </h2>

            <p>
                Año {carro.año} · {carro.kilometraje.toLocaleString("en-US")} km ·{" "}
                {carro.color} · {carro.categoria}
            </p>
            <p>{carro.descripcion}</p>
            <h2>{formatoPrecio(carro)}</h2>
            <p>{carro.disponible ? "Disponible" : "No disponible"}</p>

            <div className={styles["double-object"]}>
                <button className={styles["gold-button"]}> Comprar </button>
                <button className={styles["gold-button"]}> Ver Repuestos </button>
            </div>

        </div>
    );
}

export default function vehiculo({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="vehiculo">
            <section className={styles["hero"]}>
                <Suspense fallback={<p>Cargando...</p>}>
                    <Detalle params={params} />
                </Suspense>
            </section>
        </div>
    )
}
