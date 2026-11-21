import { Suspense } from "react";
import Link from "next/link";
import { getVehiculo, formatoPrecio } from "@/lib/api";
import ImagenCarro from "../../ImagenCarro";
import { FICHAS, TRACCION } from "@/lib/fichas";
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

    const ficha = FICHAS[carro.id];
    const datos: { etiqueta: string; valor: string; unidad?: string }[] = [];
    if (ficha) {
        datos.push({ etiqueta: "Potencia", valor: ficha.potencia.toLocaleString("en-US"), unidad: "hp" });
        datos.push({ etiqueta: "0 - 100 km/h", valor: ficha.cero100.toFixed(1), unidad: "s" });
        if (ficha.vmax) datos.push({ etiqueta: "Velocidad máx.", valor: ficha.vmax.toString(), unidad: "km/h" });
        datos.push({ etiqueta: "Tracción", valor: TRACCION[ficha.traccion] ?? ficha.traccion });
    }
    datos.push({ etiqueta: "Año", valor: String(carro.año) });
    datos.push({ etiqueta: "Kilometraje", valor: carro.kilometraje.toLocaleString("en-US"), unidad: "km" });
    datos.push({ etiqueta: "Color", valor: carro.color });

    return (
        <div className={styles["information-panel"]}>

            <div className={styles["etiquetas"]}>
                <span className={styles["etiqueta"]}> {carro.categoria} </span>
                {carro.destacado && <span className={styles["etiqueta"]}> ★ Destacado </span>}
                <span className={carro.disponible ? styles["etiqueta-ok"] : styles["etiqueta-no"]}>
                    {carro.disponible ? "● Disponible" : "● No disponible"}
                </span>
            </div>

            <h1> {carro.marca} {carro.modelo} </h1>
            <p className={styles["subtitulo"]}> {carro.marca} · {carro.año} · {carro.color} </p>

            <div className={styles["car-photo"]}>
                <ImagenCarro
                    id={carro.id}
                    modelo={`${carro.marca} ${carro.modelo}`}
                    alt={`${carro.marca} ${carro.modelo}`}
                />
            </div>

            <div className={styles["precio-fila"]}>
                <span className={styles["precio-etiqueta"]}> Precio </span>
                <span className={styles["price"]}>{formatoPrecio(carro)}</span>
            </div>

            <h2> Ficha técnica </h2>
            <div className={styles["ficha"]}>
                {datos.map((d) => (
                    <div key={d.etiqueta} className={styles["dato"]}>
                        <span className={styles["dato-etiqueta"]}>{d.etiqueta}</span>
                        <span className={styles["dato-valor"]}>
                            {d.valor}
                            {d.unidad && <small> {d.unidad}</small>}
                        </span>
                    </div>
                ))}
            </div>
            {ficha && (
                <p className={styles["motor"]}>
                    <span> Motor </span> {ficha.motor}
                </p>
            )}

            {carro.descripcion && (
                <>
                    <h2> Descripción </h2>
                    <p className={styles["descripcion"]}>{carro.descripcion}</p>
                </>
            )}

            <div className={styles["double-object"]}>
                <Link href={`/asesoria?vehiculo=${nombre}`} className={styles["gold-button"]}> Comprar </Link>
                <Link href={`/financiacion?vehiculo=${nombre}`} className={styles["gold-button"]}> Financiar </Link>
                <Link href={`/repuestos?vehiculo=${nombre}&id=${carro.id}`} className={styles["outline-button"]}> Ver Repuestos </Link>
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
