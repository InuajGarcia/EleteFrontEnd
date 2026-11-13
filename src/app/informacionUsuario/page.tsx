import Link from "next/link";
import "./informacionUsuario.css";

/* Contenido y texto de la pagina */

export default function informacionUsuario() {

    return (

        <div className ="informacionUsuario">

            <section className="hero">

                <div className="information-panel">
                
                    <h2> Informacion de Usuario </h2>


                    <div className="profile-picture"> </div>                    


                    <h1 className="textoInformacion">
                    Correo Electronico:
                    </h1>

                    <h1 className="textoInformacion">
                    Nombre y Apellidos: 
                    </h1>

                    <h1 className="textoInformacion">
                    Contraseña: 
                    </h1>

                    <h1 className="textoInformacion">
                    Numero Telefonico:
                    </h1>

                </div>


            </section>


        </div>

    )

}