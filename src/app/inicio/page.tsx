import Link from "next/link";
import styles from "./inicio.module.css";

/* Adaptar Carros */
const carros = [
    {
        nombre: "Porsche 911 Turbo S",
        imagen: "/images/paginaPrincipal1.png"
    },
    {
        nombre: "Ferrari SF90 Stradale",
        imagen: "/images/paginaPrincipal2.png"
    },
    {
        nombre: "Lamborghini Revuelto",
        imagen: "/images/paginaPrincipal3.png"
    },
    {
        nombre: "McLaren 720S",
        imagen: "/images/paginaPrincipal4.png"
    },
    {
        nombre: "Aston Martin DB12",
        imagen: "/images/paginaPrincipal5.png"
    }
];

export default function inicio() {

    return (

        <div className={styles["home-page"]}>

            {/* Principal */}

            <section className={styles["hero"]}>

                <h1> EXCELENCIA </h1>
                

                <h2>ELETÉ</h2>

                <p className={styles["hero-description"]}>
                    LUJO · POTENCIA · PRESTIGIO
                </p>

                <div className={styles["hero-buttons"]}>

                    <Link href="/inventario" className={styles["gold-button"]}>
                        VER INVENTARIO <span>➜</span>
                    </Link>

                    <Link href="/contactanos" className={styles["gold-button"]}>
                        CONTACTO <span></span>
                    </Link>

                </div>

            </section>


            {/* Seccion de vehiculos */}

            <section className={styles["featured-cars"]}>

                {carros.map((carro) => (

                    <div className={styles["car-card"]} key={carro.nombre}>

                        <div className={styles["car-image"]}>

                            <img
                                src={carro.imagen}
                                alt={carro.nombre}
                            />

                        </div>

                        <p>{carro.nombre}</p>

                    </div>

                ))}

            </section>

        </div>

    );
}