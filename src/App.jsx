import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// @V1 - simplying ref var. var is getting updated but react not refreshing var after update  
  // let value=21;

  // const add=()=>{
  //   value+=1;
  // };
  
  // const sub=()=>
  // {
  //   value-=1;
  // }

// ----------------------------------

  let [value, updateIt] = useState(21);

  const add= () =>{
    updateIt(value+1);
  }

    const sub = () => {
      updateIt(value - 1);
    };

  return (
    <>
      <h1>Lets Code Counter...</h1>

      {/* @V1 */}
      {/* <div className="counterContainer">
        <h2>Value is {value}</h2>
        <button onClick={add}>+1</button>
        <br />
        <button onClick={sub}>-1</button>
      </div> */}

{/* ------------------- */}
      <div className="counterContainer">
        <h2>Value is {value}</h2>
        <button onClick={add}>+1</button>
        <br />
        <button onClick={sub}>-1</button>
      </div>
    </>
  );
}

export default App
