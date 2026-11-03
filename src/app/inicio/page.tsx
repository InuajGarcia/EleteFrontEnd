import Link from "next/link";
import "./inicio.css";

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

export default function Inicio() {

    return (

        <div className="home-page">

            {/* Principal */}

            <section className="hero">

                <p className="hero-subtitle">
                    EXCELENCIA
                </p>

                <h1>ELETÉ</h1>

                <p className="hero-description">
                    LUJO · POTENCIA · PRESTIGIO
                </p>

                <div className="hero-buttons">

                    <Link href="/inventario" className="gold-button">
                        VER INVENTARIO <span>➜</span>
                    </Link>

                    <Link href="/contactanos" className="gold-button">
                        CONTACTO <span></span>
                    </Link>

                </div>

            </section>


            {/* Seccion de vehiculos */}

            <section className="featured-cars">

                {carros.map((carro) => (

                    <div className="car-card" key={carro.nombre}>

                        <div className="car-image">

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