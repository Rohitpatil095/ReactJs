import React from "react";

import { useState } from "react";


let [customeBkgColor, setColor] = useState("white");

function getColor({colorName})
{
  switch(colorName.getChildElement){
    case "Blue":
      setColor("blue")
      break;
    case "Red":
      setColor("red");
      break;
    case "Black":
      setColor("black");
      break;
  }

}

export default function Picker(){
    return (
      <>
        <div className="colorPickerContainer">
          <h1>Color picker</h1>
          <style>{"body { background-color: ${customeBkgColor}; }"}</style>
          <p>
            <button onClick={getColor}>Blue</button>
            <button onClick={getColor}>Red</button>
            <button onClick={getColor}>Black</button>
            {/* <button>Blue</button>
          <button>Blue</button>
          <button>Blue</button> */}
          </p>
        </div>
      </>
    );
}