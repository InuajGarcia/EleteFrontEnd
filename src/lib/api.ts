// Cliente de la API ELETE (backend NestJS + MongoDB).
// La dirección sale de .env.local -> NEXT_PUBLIC_API_URL (por defecto el backend local).
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

// Forma de un vehículo tal como lo devuelve el backend (contrato de SwaggerHub).
export type Vehiculo = {
  id: string;
  marca: string;
  modelo: string;
  año: number;
  precio: number;
  moneda: string;
  kilometraje: number;
  categoria: string;
  color: string;
  descripcion?: string;
  imagen?: string;
  disponible: boolean;
  destacado: boolean;
};

export type MensajeContacto = {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
};

async function pedir<T>(ruta: string): Promise<T> {
  // no-store: siempre trae los datos actuales de Mongo
  const r = await fetch(`${API_URL}${ruta}`, { cache: "no-store" });
  if (!r.ok) {
    throw new Error(`La API respondió ${r.status} en ${ruta}`);
  }
  return r.json() as Promise<T>;
}

export const getVehiculos = () => pedir<Vehiculo[]>("/vehiculos");
export const getDestacados = () => pedir<Vehiculo[]>("/vehiculos/destacados");
export const getVehiculo = (id: string) =>
  pedir<Vehiculo>(`/vehiculos/${encodeURIComponent(id)}`);

// POST /contacto -> 201 si se guardó
export async function enviarContacto(datos: MensajeContacto) {
  const r = await fetch(`${API_URL}/contacto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!r.ok) {
    throw new Error(`No se pudo enviar el mensaje (${r.status})`);
  }
  return r.json();
}

export function formatoPrecio(v: Vehiculo) {
  return `${v.moneda} ${v.precio.toLocaleString("en-US")}`;
}
