
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elete Carsales",
  description: "Aplicación de venta de vehículos y repuestos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header>
          <h2>ELETE CARSALES</h2>

          <nav>
            <a href="/">Inicio</a>
            <a href="/inventario">Inventario</a>
            <a href="/servicios">Servicios</a>
            <a href="/nosotros">Nosotros</a>
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
