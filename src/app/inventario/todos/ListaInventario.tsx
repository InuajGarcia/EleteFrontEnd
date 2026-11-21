"use client";

import { useState } from "react";
import type { Vehiculo } from "@/lib/api";
import TarjetaCarro from "../TarjetaCarro";
import styles from "../inventario.module.css";

// Todos los carros, con buscador por texto y filtro por categoria
export default function ListaInventario({ carros }: { carros: Vehiculo[] }) {
    const [texto, setTexto] = useState("");
    const [categoria, setCategoria] = useState("");

    const categorias = [...new Set(carros.map((c) => c.categoria))].sort();

    const buscado = texto.trim().toLowerCase();
    const visibles = carros.filter((c) => {
        if (categoria && c.categoria !== categoria) return false;
        if (!buscado) return true;
        return `${c.marca} ${c.modelo} ${c.color} ${c.año}`.toLowerCase().includes(buscado);
    });

    return (
        <>
            <div className={styles["filtros"]}>
                <input
                    type="search"
                    placeholder="Buscar por marca, modelo, color o año"
                    aria-label="Buscar vehículo"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />

                <select
                    aria-label="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {categorias.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            <p className={styles["cuenta"]}>
                {visibles.length} de {carros.length} vehículos
            </p>

            {visibles.length === 0 ? (
                <p className={styles["mensaje"]}>No hay vehículos con esa búsqueda.</p>
            ) : (
                <div className={styles["catalogue"]}>
                    {visibles.map((c) => (
                        <TarjetaCarro key={c.id} c={c} />
                    ))}
                </div>
            )}
        </>
    );
}
