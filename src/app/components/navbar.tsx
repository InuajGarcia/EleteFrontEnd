"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const enlaces = [
    { href: "/inicio", texto: "Inicio" },
    { href: "/inventario", texto: "Inventario" },
    { href: "/servicios", texto: "Servicio" },
    { href: "/nosotros", texto: "Nosotros" },
    { href: "/contactanos", texto: "Contacto" },
];

export default function Navbar() {
    /* Una variable que optenga la ruta del usuario*/
    const pathname = usePathname();

    /* En celular el menu se abre y se cierra con la hamburguesa */
    const [abierto, setAbierto] = useState(false);

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    return (
        <header className="navbar">

          {/* Logo */}
          <Link href="/inicio" className="navbar-logo" aria-label="Ir al inicio">
            <img src="/images/eleteLogo.jpg" alt="Eleté" />
          </Link>

          {/* Usuario y menu (en celular) */}
          <div className="navbar-acciones">

            <Link href="/informacionUsuario" className="navbar-perfil">
              <span className="navbar-user" role="img" aria-label="Cuenta">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
                </svg>
              </span>
            </Link>

            <button
              type="button"
              className="navbar-menu"
              aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={abierto}
              aria-controls="menu-principal"
              onClick={() => setAbierto(!abierto)}
            >
              <span />
              <span />
              <span />
            </button>

          </div>

          {/* Menu */}
          <nav
            id="menu-principal"
            className={`navbar-links${abierto ? " abierto" : ""}`}
          >
            {enlaces.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                aria-current={pathname === e.href ? "page" : undefined}
                onClick={() => setAbierto(false)}
              >
                {e.texto}
              </Link>
            ))}
          </nav>

        </header>
    )
}
