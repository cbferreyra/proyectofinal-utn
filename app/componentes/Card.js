import "./Card.css";
export default function Card({ producto }) {
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
      <div className="cardBoton">
        <button className="botonComprar">Ver detalles</button>
      </div>
    </div>
  );
}
