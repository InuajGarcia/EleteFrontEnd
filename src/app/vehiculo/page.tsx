import Link from "next/link";
import "./vehiculo.css"

export default function vehiculo() {
    return (
        <div className="vehiculo">
            <section className="hero">

                <div className="information-panel">
                    <h1> Nombre del carro </h1>

                    <h2> Informacion del carro </h2>
                    

                    <button className="gold-button"> Comprar </button>

                </div>


            </section> 


        </div>
    )
}