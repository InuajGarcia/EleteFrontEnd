import styles from "./contactanos.module.css";

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

        <div className={styles["contact-page"]}>

            {/* Principal */}

            <section className={styles["hero"]}>

                <img
                    className={styles["hero-car"]}
                    src="/images/auto-contacto.png"
                    alt=""
                />

                <p className={styles["hero-subtitle"]}>
                    CONTÁCTANOS
                </p>

                <h1>ELETÉ</h1>

                <p className={styles["hero-text"]}>
                    Estamos aquí para ayudarte a encontrar el vehículo de tus sueños
                </p>

            </section>


            {/* Seccion de contacto */}

            <section className={styles["contact-panels"]}>

                {/* Informacion */}

                <div className={styles["contact-info"]}>

                    <h2>INFORMACIÓN DE CONTACTO</h2>

                    <p>
                        Nuestro equipo está listo para responderte todas tus
                        preguntas y brindarte la mejor asesoría en la compra
                        de tu próximo vehículo.
                    </p>

                    {datos.map((dato) => (

                        <div className={styles["info-item"]} key={dato.titulo}>

                            <span className={styles["info-icon"]}>{dato.icono}</span>

                            <div>
                                <strong>{dato.titulo}</strong>
                                <small>{dato.valor}</small>
                            </div>

                        </div>

                    ))}

                </div>


                {/* Formulario */}

                <form className={styles["contact-form"]}>

                    <h2>ENVÍANOS UN MENSAJE</h2>

                    <div className={styles["form-row"]}>

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
                        className={styles["form-logo"]}
                        src="/images/logo.png"
                        alt="Eleté"
                    />

                    <button type="submit" className={styles["gold-button"]}>
                        ENVIAR MENSAJE <span>➤</span>
                    </button>

                </form>

            </section>

        </div>

    );
}