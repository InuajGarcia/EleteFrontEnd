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

    // Nombre del carro para llevarlo a los formularios (?vehiculo=...)
    const nombre = encodeURIComponent(`${carro.marca} ${carro.modelo}`);

    return (
        <div className={styles["information-panel"]}>

            <h1> {carro.marca} {carro.modelo} </h1>

            <div className={styles["car-photo"]}>
                <ImagenCarro
                    id={carro.id}
                    modelo={`${carro.marca} ${carro.modelo}`}
                    alt={`${carro.marca} ${carro.modelo}`}
                />
            </div>

            <h2> Informacion del carro </h2>

            <p>
                Año {carro.año} · {carro.kilometraje.toLocaleString("en-US")} km ·{" "}
                {carro.color} · {carro.categoria}
            </p>
            <p>{carro.descripcion}</p>
            <h2 className={styles["price"]}>{formatoPrecio(carro)}</h2>
            <p>{carro.disponible ? "Disponible" : "No disponible"}</p>

            <div className={styles["double-object"]}>
                <Link href={`/asesoria?vehiculo=${nombre}`} className={styles["gold-button"]}> Comprar </Link>
                <Link href={`/financiacion?vehiculo=${nombre}`} className={styles["gold-button"]}> Financiar </Link>
                <Link href={`/repuestos?vehiculo=${nombre}`} className={styles["gold-button"]}> Ver Repuestos </Link>
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
