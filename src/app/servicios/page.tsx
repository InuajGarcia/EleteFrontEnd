
import Link from "next/link";
import styles from "./servicios.module.css";

const servicios = [
    {
        titulo: "REPUESTOS",
        icono: "/images/iconoRepuestos.png",
        texto: "Accede a las piezas originales y de alta calidad para tu vehículo."
    },
    {
        titulo: "ASESORÍA",
        icono: "/images/iconoAsesoria.png",
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
        <div className={styles["homepage"]}>

            <section className={styles["hero"]}>

                <h1>
                    SERVICIOS
                </h1>

                <h2>
                    ELETE
                </h2>

                <h3>
                    --------- ATENCION PREMIUM PARA CADA VEHICULO ---------
                </h3>

            </section>

            <section className={styles["servicios-page"]}>

                <div className={styles["servicios-grid"]}>

                    {servicios.map((s) => (

                        <article
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

                        </article>

                    ))}

                </div>

                <Link
                    href="/contactanos"
                    className={styles["servicios-cta"]}
                >
                    CONTACTAR ASESOR

                    <span>➜</span>

                </Link>

            </section>

        </div>
    );
}
