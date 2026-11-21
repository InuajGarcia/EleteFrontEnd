"use client";

import { useMemo, useSyncExternalStore } from "react";

// Sesion de usuario. El registro, el login y el perfil se hacen contra el backend
// (/auth/registro, /auth/login, /auth/perfil). En el navegador solo se guarda el
// token y los datos publicos del usuario; la contrasena NO se guarda.
import { API_URL } from "./api";
const CLAVE = "elete_usuario";
const EVENTO = "elete-usuario";

const CLAVE_TOKEN = "elete_token";

export type Usuario = {
    correo: string;
    nombre?: string;
    telefono?: string;
    foto?: string; // imagen pequena en formato data URL
};

function leerCrudo(): string | null {
    return localStorage.getItem(CLAVE);
}

export function leerUsuario(): Usuario | null {
    try {
        const crudo = leerCrudo();
        return crudo ? (JSON.parse(crudo) as Usuario) : null;
    } catch {
        return null;
    }
}

// Guarda al usuario (o lo borra con null) y avisa a los componentes que lo muestran
export function guardarUsuario(u: Usuario | null) {
    if (u) localStorage.setItem(CLAVE, JSON.stringify(u));
    else localStorage.removeItem(CLAVE);
    window.dispatchEvent(new Event(EVENTO));
}

async function pedir(ruta: string, opciones: RequestInit = {}) {
    let r: Response;
    try {
        r = await fetch(`${API_URL}${ruta}`, {
            ...opciones,
            headers: { "Content-Type": "application/json", ...(opciones.headers ?? {}) },
        });
    } catch {
        throw new Error("No se pudo conectar con el servidor. Intenta de nuevo en un momento.");
    }
    const datos = await r.json().catch(() => ({}));
    if (!r.ok) {
        const m = Array.isArray(datos.message) ? datos.message[0] : datos.message;
        throw new Error(m || "Ocurrió un error. Intenta de nuevo.");
    }
    return datos;
}

function abrirSesion(res: { token: string; usuario: Usuario }) {
    localStorage.setItem(CLAVE_TOKEN, res.token);
    guardarUsuario(res.usuario);
}

export async function registrarUsuario(correo: string, clave: string) {
    abrirSesion(await pedir("/auth/registro", { method: "POST", body: JSON.stringify({ correo, clave }) }));
}

export async function iniciarSesion(correo: string, clave: string) {
    abrirSesion(await pedir("/auth/login", { method: "POST", body: JSON.stringify({ correo, clave }) }));
}

export function cerrarSesion() {
    localStorage.removeItem(CLAVE_TOKEN);
    guardarUsuario(null);
}

// Guarda nombre, telefono o foto en el backend
export async function actualizarPerfil(cambios: Partial<Pick<Usuario, "nombre" | "telefono" | "foto">>) {
    const token = localStorage.getItem(CLAVE_TOKEN);
    if (!token) throw new Error("Tu sesión expiró. Inicia sesión de nuevo.");
    const u = await pedir("/auth/perfil", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(cambios),
    });
    guardarUsuario(u);
}

function suscribir(aviso: () => void) {
    window.addEventListener(EVENTO, aviso);
    window.addEventListener("storage", aviso);
    return () => {
        window.removeEventListener(EVENTO, aviso);
        window.removeEventListener("storage", aviso);
    };
}

// Devuelve: undefined mientras carga, null si no hay sesion, o el usuario
export function useUsuario(): Usuario | null | undefined {
    const crudo = useSyncExternalStore<string | null | undefined>(
        suscribir,
        leerCrudo,
        () => undefined,
    );

    return useMemo(() => {
        if (crudo === undefined) return undefined;
        if (crudo === null) return null;
        try {
            return JSON.parse(crudo) as Usuario;
        } catch {
            return null;
        }
    }, [crudo]);
}
