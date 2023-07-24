//"use client";
import { use } from "react";
import "./Card.css";
import VerDetalle from "../funciones";

export default function Card({ producto }) {
  /* const verDetalle = () => {
    console.log("el boton funcioa");
  }; */
  return (
    <div className="card">
      <img src={producto.imagen} alt="" />
      <div className="card-info">
        <h2>{producto.titulo}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <div className="card-info-detalles">
          <p className="precio">${producto.precio}</p>
          {/* si el envio es true se muestra e párrafo */}
          {producto.envio && <p className="envio">Envío gratis</p>}
        </div>
      </div>
      <VerDetalle />
      {/* <div className="cardBoton">
        <button className="botonComprar" onClick={VerDetalle}>
          Ver detalles
        </button>
      </div> */}
    </div>
  );
}
