import React from "react";
import { useState } from "react";
const App = () => {
  const [heading, setHeading] = useState("Magnificient Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos")
  };

  return (
    <div>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </div>
  )
}

export default App;
