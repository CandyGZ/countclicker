import "./App.css";
import logo from "../src/imgs/LogoProyectos.png";
import Boton from "./components/Boton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  // este es un hook setState donde numclicks es el elemento que nos interesa modificar
  const [numClicks, SetNumClicks] = useState(0); // cero es el valor inicial

  const changeClick = () => {
    SetNumClicks(numClicks + 1);
  };
  const restartCounter = () => {
    SetNumClicks(0);
  };
  return (
    <all>
      <header className="header">
        <div className="header-text">Click Counter</div>
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="Dev" />
          </div>
        </div>
      </header>
      <content>
        <div className="container">
          <Counter numClicks={numClicks} />
          <Boton texto="Click" isButtonClick={true} handleClick={changeClick} />
          <Boton
            texto="Restart"
            isButtonClick={false}
            handleClick={restartCounter}
          />
        </div>
      </content>
    </all>
  );
}

export default App;
