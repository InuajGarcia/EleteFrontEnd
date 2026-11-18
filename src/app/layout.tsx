import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Cormorant_Garamond, Oswald } from "next/font/google";
import Navbar from "./components/navbar";

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

        <Navbar />

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