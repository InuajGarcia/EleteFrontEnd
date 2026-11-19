"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    /* Una variable que optenga la ruta del usuario*/
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    return (
        <header className="navbar">

          {/* Logo */}
          <div className="navbar-logo">
            <img src="/images/eleteLogo.jpg" alt="Eleté" />
          </div>

          {/* Menu */}
          <nav className="navbar-links">
            <Link href="/inicio">Inicio</Link>
            <Link href="/inventario">Inventario</Link>
            <Link href="/servicios">Servicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contactanos">Contacto</Link>
          </nav>

          {/* Usuario */}
          <Link href="/informacionUsuario" className="navbar-perfil">
            <button className="navbar-user" aria-label="Cuenta">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
              </svg>
            </button>
          </Link>

        </header>
    )
}

