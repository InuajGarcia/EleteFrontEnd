import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={cormorant.className}>
        <header>
          <h2>ELETE CARSALES</h2>

          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/inventario">Inventario</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/nosotros">Nosotros</Link>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>© 2026 Elete Carsales</p>
        </footer>

      </body>
    </html>
  );
}
