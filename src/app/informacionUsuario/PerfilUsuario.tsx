"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { actualizarPerfil, cerrarSesion as salir, useUsuario } from "@/lib/usuario";
import styles from "./informacionUsuario.module.css";

// Reduce la foto elegida a un cuadrado pequeno para que quepa en el navegador
function reducirFoto(archivo: File): Promise<string> {
    return new Promise((resolver, rechazar) => {
        const lector = new FileReader();
        lector.onerror = () => rechazar(new Error("No se pudo leer la imagen"));
        lector.onload = () => {
            const img = new Image();
            img.onerror = () => rechazar(new Error("El archivo no es una imagen"));
            img.onload = () => {
                const lado = 256;
                const lienzo = document.createElement("canvas");
                lienzo.width = lado;
                lienzo.height = lado;
                const ctx = lienzo.getContext("2d");
                if (!ctx) return rechazar(new Error("No se pudo procesar la imagen"));
                // Recorta al centro para que quede cuadrada
                const corte = Math.min(img.width, img.height);
                const x = (img.width - corte) / 2;
                const y = (img.height - corte) / 2;
                ctx.drawImage(img, x, y, corte, corte, 0, 0, lado, lado);
                resolver(lienzo.toDataURL("image/jpeg", 0.85));
            };
            img.src = String(lector.result);
        };
        lector.readAsDataURL(archivo);
    });
}

export default function PerfilUsuario() {
    const router = useRouter();
    const usuario = useUsuario();

    const [mensaje, setMensaje] = useState("");

    // Todavia no se sabe si hay sesion (se lee del navegador)
    if (usuario === undefined) {
        return <div className={styles["information-panel"]} />;
    }

    if (usuario === null) {
        return (
            <div className={styles["information-panel"]}>
                <h2> Informacion de Usuario </h2>
                <p className={styles["aviso"]}>Todavía no has iniciado sesión.</p>
                <div className={styles["acciones"]}>
                    <Link href="/login" className={styles["gold-button"]}> Iniciar sesión </Link>
                    <Link href="/register" className={styles["boton-claro"]}> Registrarme </Link>
                </div>
            </div>
        );
    }

    async function guardar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!usuario) return;
        const d = new FormData(e.currentTarget);
        try {
            await actualizarPerfil({
                nombre: String(d.get("nombre") ?? "").trim(),
                telefono: String(d.get("telefono") ?? "").trim(),
            });
            setMensaje("Cambios guardados.");
        } catch (err) {
            setMensaje(err instanceof Error ? err.message : "No se pudieron guardar los cambios.");
        }
    }

    async function cambiarFoto(e: React.ChangeEvent<HTMLInputElement>) {
        const archivo = e.target.files?.[0];
        if (!archivo || !usuario) return;
        try {
            const foto = await reducirFoto(archivo);
            await actualizarPerfil({ foto });
            setMensaje("Foto actualizada.");
        } catch (err) {
            setMensaje(err instanceof Error ? err.message : "No se pudo usar esa imagen. Prueba con otra.");
        }
    }

    function cerrarSesion() {
        salir();
        router.push("/login");
    }

    return (
        <form className={styles["information-panel"]} onSubmit={guardar}>

            <h2> Informacion del Usuario </h2>

            <div className={styles["foto-fila"]}>

                <div className={styles["profile-picture"]}>
                    {usuario.foto && <img src={usuario.foto} alt="Foto de perfil" />}
                </div>

                <label className={styles["editar-foto"]}>
                    Editar foto de perfil
                    <input type="file" accept="image/*" onChange={cambiarFoto} hidden />
                </label>

            </div>

            <div className={styles["campo"]}>
                <label htmlFor="correo"> Correo Electronico: </label>
                <input id="correo" value={usuario.correo} readOnly />
            </div>

            <div className={styles["campo"]}>
                <label htmlFor="nombre"> Nombre y Apellidos: </label>
                <input
                    id="nombre"
                    name="nombre"
                    defaultValue={usuario.nombre ?? ""}
                    placeholder="Escribe tu nombre"
                    autoComplete="name"
                />
            </div>

            <div className={styles["campo"]}>
                <label htmlFor="clave"> Contraseña: </label>
                <input id="clave" value="*******" readOnly />
            </div>

            <div className={styles["campo"]}>
                <label htmlFor="telefono"> Numero Telefonico: </label>
                <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    defaultValue={usuario.telefono ?? ""}
                    placeholder="+57 300 000 0000"
                    autoComplete="tel"
                />
            </div>

            {mensaje && <p className={styles["aviso"]} role="status">{mensaje}</p>}

            <div className={styles["acciones"]}>
                <button type="submit" className={styles["gold-button"]}> Guardar cambios </button>
                <button type="button" className={styles["boton-claro"]} onClick={cerrarSesion}>
                    Cerrar sesión
                </button>
            </div>

        </form>
    );
}
