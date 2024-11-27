import { useState } from "react";


function About() {

  let [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number => number + 1);
    setNumber(poopnumber => poopnumber + 1);
  };

  const removeOne = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };



    return (
      <>
        <h2>Number go up, number go down.</h2>
        <h3>{number}</h3>
        <button className="plus-btn" onClick={addOne}>+</button>
        <button className="reset-btn" onClick={reset}>RESET</button>
        <button className="minus-btn" onClick={removeOne}>-</button>
      </>
    );
  }
  
  export default About;