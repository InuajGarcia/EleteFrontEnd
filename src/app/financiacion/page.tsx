import { Suspense } from "react";
import FormularioSolicitud from "../components/FormularioSolicitud";
import styles from "../components/Solicitud.module.css";

export default function Financiacion() {
    return (
        <div className={styles["pagina"]}>

            <div className={styles["encabezado"]}>
                <h1>FINANCIACIÓN</h1>
                <p>Opciones de pago adaptadas a tus necesidades.</p>
            </div>

            <Suspense fallback={null}>
                <FormularioSolicitud tipo="financiacion" />
            </Suspense>

        </div>
    );
}
