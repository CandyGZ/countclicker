import React from "react";
import "../styles/Boton.css";
function Boton({ texto, isButtonClick, handleClick }) {
  return (
    <button
      className={isButtonClick ? "btn-click" : "btn-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
