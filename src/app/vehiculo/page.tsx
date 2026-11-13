import Link from "next/link";
import "./vehiculo.css"

export default function vehiculo() {
    return (
        <div className="vehiculo">
            <section className="hero">

                <div className="information-panel">

                    <div className="double-object">
                        <h1> Nombre del carro </h1>
                        <div className="flag"></div>
                    </div>

                    <h2> Informacion del carro </h2>
                    

                    <div className="double-object"></div>
                        <button className="gold-button"> Comprar </button>
                        <button className="gold-button"> Ver Repuestos </button>
                    </div>


            </section> 


        </div>
    )
}