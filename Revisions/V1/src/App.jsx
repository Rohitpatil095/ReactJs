import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Picker from "./colourPicker/Picker";
import { Counter } from "./counter/comp/cou";

function App() {
  let [currLen, setLen] = useState(5);
  let [nums, setNums] = useState(false);
  let [symb, setSymb] = useState(false);
  let [pass, setPass] = useState("");

    // function generatePass() 
    // {
    //   let passString = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
    //   let tempPass = "";

    //   if (symb) {
    //     passString += "~`!@#$%^&*";
    //   }
    //   if (nums) {
    //     passString += "1234567890";
    //   }

    //   for (let i = 0; i < currLen; i++) {
    //     tempPasspass += passString.charAt(
    //       Math.floor(Math.random() * passString.length + 1)
    //     );
    //   }

    //   // setPass(tempPass);
    // };

  // const generatePass= useCallback(()=>{
  //   let passString = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
  //   let tempPass = "";

  //   if (symb) {
  //     passString += "~`!@#$%^&*";
  //   }
  //   if (nums) {
  //     passString += "1234567890";
  //   }

  //   for (let i = 0; i < currLen; i++) {
  //     tempPasspass += passString.charAt(
  //       Math.floor(Math.random() * passString.length + 1)
  //     );
  //   }

  //   setPass(tempPass);
  // },[ currLen,nums,symb,pass]);


  // useEffect(()=>
  // { 
  //   generatePass(),[length,symb,pass,nums]
  // })


  return (
    <>
      {/* <Counter/> */}
      {/* <Picker/> */}

      <div
        style={{
          height: "100vh",
          width: "100vh",
          backgroundColor: "black",
        }}
      >
        <div>
          <h1 className="text-center text-4xl">Pass Generator</h1>
          <input
            type="text"
            id="pass"
            value={pass}
            placeholder="password"
            readOnly
          ></input>

          <button className="bg-blue-400">Copy</button>
          <br></br>

          <input
            type="range"
            min="1"
            max="100"
            className="cursor-pointer"
            id="range"
            onChange={(event) => setLen(event.target.value)}
          ></input>
          <h2>Length {currLen}</h2>

          <input
            type="checkbox"
            defaultChecked={nums}
            onChange={setNums((prev) => !nums)}
            value="nums"
            id="isNum"
          ></input>
          <h2>Numbers</h2>
          <input
            type="checkbox"
            defaultChecked={symb}
            onChange={setSymb((prev) => !symb)}
            value="symbols"
            id="isSymbols"
          ></input>
          <h2>Symbols</h2>
        </div>
      </div>
    </>
  );
}

export default App;
