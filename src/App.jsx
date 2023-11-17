import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Picker from "./components/colorPicker"


// import { useState } from "react";



function App() {
  
    
  let [customeBkgColor, setColor] = useState("olive");

  // const getColor = ({ colorName }) => {

  //   console.log(colorName);
  //   if(colorName==="Blue")
  //   {
  //     setColor("blue");
  //     console.log("color:", colorName);
  //     return;
  //   }
  //   else if(colorName==="red")
  //   {
  //     setColor("red");
  //   }
  //   else if(colorName==="black")
  //   {
  //     setColor("black");
  //   }
  // };



  return (
    <>
      <div
        className="colorPickerContainer"
        style={{ backgroundColor: customeBkgColor }}
      >
        <h1>Color picker</h1>
        <p>
          {/* <button onClick={getColor}>Blue</button>
          <button onClick={getColor}>Red</button>
          <button onClick={getColor}>Black</button> */}

          <button onClick={()=>setColor("blue")}>Blue</button>
          <button onClick={()=>setColor("red")}>Red</button>
          <button onClick={()=>setColor("black")}>Black</button>

          {/* <button>Blue</button>
          <button>Blue</button>
          <button>Blue</button> */}
        </p>
      </div>
    </>
  );
}

export default App
