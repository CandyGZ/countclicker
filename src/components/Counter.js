import React from "react";
import "../styles/Counter.css";

function Counter({ numClicks }) {
  return <div className="counter">{numClicks}</div>;
}

//Forma destructuring
/* function Counter(props) {
  return <div className="counter">{props.numClicks}</div>;
} */

export default Counter;
