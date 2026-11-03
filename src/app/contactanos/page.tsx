import "./contactanos.css";

/* Datos de contacto */
const datos = [
    {
        icono: "📍",
        titulo: "DIRECCIÓN",
        valor: "Calle 00 # 00-00, Cali"
    },
    {
        icono: "📞",
        titulo: "TELÉFONO",
        valor: "+57 300 000 0000"
    },
    {
        icono: "✉️",
        titulo: "EMAIL",
        valor: "contacto@elete.com"
    },
    {
        icono: "🕒",
        titulo: "HORARIO DE ATENCIÓN",
        valor: "Lun - Sáb: 9:00 a.m. - 6:00 p.m."
    }
];

export default function Contactanos() {

    return (

        <div className="contact-page">

            {/* Principal */}

            <section className="hero">

                <img
                    className="hero-car"
                    src="/images/auto-contacto.png"
                    alt=""
                />

                <p className="hero-subtitle">
                    CONTÁCTANOS
                </p>

                <h1>ELETÉ</h1>

                <p className="hero-text">
                    Estamos aquí para ayudarte a encontrar el vehículo de tus sueños
                </p>

            </section>


            {/* Seccion de contacto */}

            <section className="contact-panels">

                {/* Informacion */}

                <div className="contact-info">

                    <h2>INFORMACIÓN DE CONTACTO</h2>

                    <p>
                        Nuestro equipo está listo para responderte todas tus
                        preguntas y brindarte la mejor asesoría en la compra
                        de tu próximo vehículo.
                    </p>

                    {datos.map((dato) => (

                        <div className="info-item" key={dato.titulo}>

                            <span className="info-icon">{dato.icono}</span>

                            <div>
                                <strong>{dato.titulo}</strong>
                                <small>{dato.valor}</small>
                            </div>

                        </div>

                    ))}

                </div>


                {/* Formulario */}

                <form className="contact-form">

                    <h2>ENVÍANOS UN MENSAJE</h2>

                    <div className="form-row">

                        <label>
                            NOMBRE COMPLETO
                            <input type="text" placeholder="Tu nombre completo" />
                        </label>

                        <label>
                            EMAIL
                            <input type="email" placeholder="tucorreo@email.com" />
                        </label>

                    </div>

                    <label>
                        TELÉFONO
                        <input type="tel" placeholder="+57 300 000 0000" />
                    </label>

                    <label>
                        MENSAJE
                        <textarea rows={4} placeholder="¿En qué podemos ayudarte?" />
                    </label>

                    <img
                        className="form-logo"
                        src="/images/logo.png"
                        alt="Eleté"
                    />

                    <button type="submit" className="gold-button">
                        ENVIAR MENSAJE <span>➤</span>
                    </button>

                </form>

            </section>

        </div>

    );
}