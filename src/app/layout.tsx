import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Cormorant_Garamond, Oswald } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--fuente-menu",
});

export const metadata: Metadata = {
  title: "Elete Carsales",
  description: "Aplicación de venta de vehículos y repuestos",
};

export default function RootLayout({
  children,
}: Readonly<{
  /* Children el encargado de mostrar las diferentes Paginas */
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.className} ${oswald.variable}`}>

        <header className="navbar">

          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <img src="/images/logo.png" alt="Eleté" />
          </Link>

          {/* Menu */}
          <nav className="navbar-links">
            <Link href="/">Inicio</Link>
            <Link href="/inventario">Inventario</Link>
            <Link href="/servicios">Servicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contactanos">Contacto</Link>
          </nav>

          {/* Usuario */}
          <button className="navbar-user" aria-label="Cuenta">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
            </svg>
          </button>

        </header>

        <main>
          {children}
        </main>

        <footer className="footer">
          <p>© 2026 Elete Carsales</p>
        </footer>

      </body>
    </html>
  );
}