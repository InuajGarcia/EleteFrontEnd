"use client";

import { useMemo, useSyncExternalStore } from "react";

// Sesion de usuario guardada en el navegador (localStorage).
// El backend del proyecto (contrato de SwaggerHub) no tiene rutas de usuarios,
// asi que el perfil vive solo en este navegador. La contrasena NO se guarda.
const CLAVE = "elete_usuario";
const EVENTO = "elete-usuario";

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

// Entrar o registrarse con un correo: si ya habia datos de ese correo se conservan
export function iniciarSesion(correo: string) {
    const previo = leerUsuario();
    const mismo = previo && previo.correo.toLowerCase() === correo.toLowerCase();
    guardarUsuario(mismo ? { ...previo, correo } : { correo });
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
