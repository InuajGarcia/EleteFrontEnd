import Link from "next/link";
import { formatoPrecio, type Vehiculo } from "@/lib/api";
import ImagenCarro from "../ImagenCarro";
import styles from "./inventario.module.css";

// Tarjeta de un carro: se usa en los destacados y en "Ver todo el inventario"
export default function TarjetaCarro({ c }: { c: Vehiculo }) {
    return (
        <Link href={`/vehiculo/${c.id}`} className={styles["car-container"]}>
            <div className={styles["car-photo"]}>
                <ImagenCarro
                    id={c.id}
                    modelo={`${c.marca} ${c.modelo}`}
                    alt={`${c.marca} ${c.modelo}`}
                />
            </div>

            <h4>{c.marca} {c.modelo}</h4>

            <p className={styles["car-data"]}>
                <span aria-hidden="true">📅</span> {c.año}
            </p>
            <p className={styles["car-data"]}>
                <span aria-hidden="true">⏱</span> {c.kilometraje.toLocaleString("en-US")} km
            </p>

            <h5>{formatoPrecio(c)}</h5>

            <span className={styles["gold-button"]}>
                Ver Detalles <span aria-hidden="true">➜</span>
            </span>
        </Link>
    );
}
