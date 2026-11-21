import { Suspense } from "react";
import FormularioSolicitud from "../components/FormularioSolicitud";
import styles from "../components/Solicitud.module.css";

export default function Asesoria() {
    return (
        <div className={styles["pagina"]}>

            <div className={styles["encabezado"]}>
                <h1>ASESORÍA</h1>
                <p>Comunícate directamente con un especialista de Eleté.</p>
            </div>

            {/* Suspense: el formulario lee la direccion (?vehiculo=...) */}
            <Suspense fallback={null}>
                <FormularioSolicitud tipo="asesoria" />
            </Suspense>

        </div>
    );
}
