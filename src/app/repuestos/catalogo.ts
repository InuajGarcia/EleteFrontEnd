// Catalogo de repuestos que se muestra en la pagina (segun el diseno de Figma).
// Cada uno se pide con POST /repuestos; el backend guarda la solicitud.
export type Repuesto = {
    id: string;
    categoria: string;
    nombre: string;
    precio: number; // USD
};

export const REPUESTOS: Repuesto[] = [
    { id: "REP-01", categoria: "Motor", nombre: "Filtro aceite", precio: 179 },
    { id: "REP-02", categoria: "Motor", nombre: "Filtro aire", precio: 250 },
    { id: "REP-03", categoria: "Llantas", nombre: "Neumáticos", precio: 8483 },
    { id: "REP-04", categoria: "Encendido", nombre: "Bujías", precio: 381 },
    { id: "REP-05", categoria: "Eléctrico", nombre: "Batería", precio: 1197 },
    { id: "REP-06", categoria: "Frenos", nombre: "Discos de freno", precio: 3584 },
    { id: "REP-07", categoria: "Frenos", nombre: "Pastillas de freno", precio: 1446 },
    { id: "REP-08", categoria: "Suspensión", nombre: "Amortiguador", precio: 4192 },
    { id: "REP-09", categoria: "Refrigeración", nombre: "Radiador", precio: 3194 },
    { id: "REP-10", categoria: "Eléctrico", nombre: "Alternador", precio: 2794 },
];
