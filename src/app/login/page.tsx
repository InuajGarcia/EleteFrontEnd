import Link from "next/link";
import "./login.css"

export default function login(){

    return (

        <div className="login">

            <section className="hero">

                <h1> ELETÉ </h1>

                <h2> LUJO • POTENCIA • PRESTIGIO </h2>


                <div className="information-panel">

                    <h3> Iniciar Sesion </h3>

                    <div className="dual-space">

                        <h4> Correo Electronico </h4>
                        <input 
                            className="login-box"
                            type="email"

                        />

                    </div>




                    <div className="dual-space">

                        <h4> Contraseña </h4>
                        <input
                            className="login-box" 
                            type="text"
                        />

                    </div>



                    <div className="double-object">

                        <h5> No tienes cuenta todavia? </h5>
                        <h6> Registrate </h6>
                        <h5> aqui </h5>
                        <button className="key-button"> Continuar </button>

                    </div>                    

                </div>


            </section>


        </div>
    )
}