import Link from "next/link";
import "./servicios.css";

const servicios = [
    {
        titulo: "REPUESTOS",
        icono: "/images/icono-repuestos.png",
        texto: "Accede a las piezas originales y de alta calidad para tu vehículo."
    },
    {
        titulo: "ASESORÍA",
        icono: "/images/icono-asesoria.png",
        texto: "Comunícate directamente con un especialista."
    },
    {
        titulo: "FINANCIACIÓN",
        icono: "/images/icono-financiacion.png",
        texto: "Opciones de pago adaptadas a tus necesidades."
    },
    {
        titulo: "VENTA Y COMPRA",
        icono: "/images/icono-venta.png",
        texto: "Compra, vende y disfruta del lujo con el respaldo de nuestros especialistas."
    }
];

export default function Servicios() {
    return (
        <main className="servicios-page">
            <p className="servicios-eyebrow">SERVICIOS</p>
            <h1 className="servicios-marca">ELETÉ</h1>
            <p className="servicios-lema">ATENCIÓN PREMIUM PARA CADA VEHÍCULO</p>

            <section className="servicios-grid">
                {servicios.map((s) => (
                    <article className="servicio-card" key={s.titulo}>
                        <img src={s.icono} alt="" />
                        <h2>{s.titulo}</h2>
                        <p>{s.texto}</p>
                    </article>
                ))}
            </section>

            <Link href="/contactanos" className="servicios-cta">
                CONTACTAR ASESOR <span>➜</span>
            </Link>
        </main>
    );
}