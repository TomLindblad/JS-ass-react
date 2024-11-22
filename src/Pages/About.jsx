function About() {

  let number = 0;
  console.log (number)
  const addOne = () => {
    number++;
    console.log (number);
  };

  const removeOne = () => {
    number--;
    console.log (number);
  };


    return (
      <>
        <h1>ABOUT</h1>
        <button className="plus-btn" onClick={addOne}>ADD</button>
        <h2 className="myNumber">0</h2>
        <button className="minus-btn" onClick={removeOne}>SUBSTRACT</button>
      </>
    );
  }
  
  export default About;