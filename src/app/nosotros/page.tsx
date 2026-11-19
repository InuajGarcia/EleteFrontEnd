import Link from "next/link";
import styles from "./nosotros.module.css";

/* Estadísticas */
const estadisticas = [
    {
        numero: "12+",
        texto: "AÑOS DE EXPERIENCIA"
    },
    {
        numero: "30+",
        texto: "VEHÍCULOS DISPONIBLES"
    },
    {
        numero: "110+",
        texto: "CLIENTES SATISFECHOS"
    }
];

export default function Nosotros() {

    return (

        <div className={styles["nosotros-page"]}>

            {/* Principal */}

            <section>

                <p className={styles["hero-subtitle"]}>
                    NOSOTROS
                </p>

                <h1>ELETÉ</h1>

                <p className={styles["hero-description"]}>
                    LUJO · POTENCIA · PRESTIGIO
                </p>

                <p className={styles["hero-text"]}>
                    Desde nuestros inicios, nos hemos dedicado a conectar a
                    nuestros clientes con vehículos de alta gama, ofreciendo
                    confianza, transparencia y un servicio excepcional en cada
                    detalle.
                </p>

            </section>


            {/* Seccion de estadisticas */}

            <section className={styles["stats"]}>

                {estadisticas.map((dato) => (

                    <div className={styles["stat-card"]} key={dato.texto}>

                        <h2>{dato.numero}</h2>

                        <p>{dato.texto}</p>

                    </div>

                ))}

            </section>


            {/* Boton */}

            <div>

                <Link href="/" className={styles["gold-button"]}>
                    INICIO <span>➜</span>
                </Link>

            </div>

        </div>

    );
}