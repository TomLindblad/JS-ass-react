import '../colourPicker.css';
import { useState } from 'react';


function ColourPicker() {

  const [colour, setColour] = useState("#B6AD26");
  const myStyle = {
    backgroundColor: colour
  }

    function handleColourChange(event){
      setColour(event.target.value);
    };
  
  
      return (
        <>
          <div className="colourPickerContainer">
            <h2>Pick a colour and change the world.</h2>
            <div className="colourBox" style={myStyle}>
              <p className="colourBoxText">{colour}</p>
            </div>
            <input type="color" value={colour} onChange={handleColourChange} />            
          </div>
        </>
      );
    };
    
    export default ColourPicker;