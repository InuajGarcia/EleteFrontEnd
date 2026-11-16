import Link from "next/link";
import "./register.css"

export default function register(){

    return (

        <div className="register">

            <section className="hero">

                <h1> ELETÉ </h1>

                <h2> LUJO • POTENCIA • PRESTIGIO </h2>


                <div className="information-panel">

                    <h3> Registro </h3>

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

                        <button className="key-button"> Continuar </button>

                    </div>                    

                </div>


            </section>


        </div>
    )
}