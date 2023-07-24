//función que amplía la info de la card
"use client";
/* export default function VerDetalle(producto) {
  console.log(producto);
} */
export default function VerDetalle() {
  const click = () => {
    console.log("ahora si el botón funciona ok");
  };

  return (
    <div className="cardBoton">
      <button className="botonComprar" onClick={click}>
        Ver detalles
      </button>
    </div>
  );
}
