
import Link from "next/link";
import styles from "./servicios.module.css";

const servicios = [
    {
        titulo: "REPUESTOS",
        href: "/repuestos",
        icono: "/images/iconoRepuestos.png",
        texto: "Accede a las piezas originales y de alta calidad para tu vehículo."
    },
    {
        titulo: "ASESORÍA",
        href: "/asesoria",
        icono: "/images/iconoAsesoria.png",
        texto: "Comunícate directamente con un especialista."
    },
    {
        titulo: "FINANCIACIÓN",
        href: "/financiacion",
        icono: "/images/icono-financiacion.svg",
        texto: "Opciones de pago adaptadas a tus necesidades."
    },
    {
        titulo: "VENTA Y COMPRA",
        href: "/inventario",
        icono: "/images/icono-venta.svg",
        texto: "Compra, vende y disfruta del lujo con el respaldo de nuestros especialistas."
    }
];

export default function Servicios() {
    return (
        <div className={styles["homepage"]}>

            <section className={styles["hero"]}>

                <h1>
                    SERVICIOS
                </h1>

                <h2>
                    ELETÉ
                </h2>

                <h3>
                    ATENCIÓN PREMIUM PARA CADA VEHÍCULO
                </h3>

            </section>

            <section className={styles["servicios-page"]}>

                <div className={styles["servicios-grid"]}>

                    {servicios.map((s) => (

                        <Link
                            href={s.href}
                            className={styles["servicio-card"]}
                            key={s.titulo}
                        >

                            <img
                                src={s.icono}
                                alt={s.titulo}
                            />

                            <h2>
                                {s.titulo}
                            </h2>

                            <p>
                                {s.texto}
                            </p>

                        </Link>

                    ))}

                </div>

                <Link
                    href="/contactanos"
                    className={styles["servicios-cta"]}
                >
                    CONTACTAR ASESOR

                    <span aria-hidden="true">➜</span>

                </Link>

            </section>

        </div>
    );
}
