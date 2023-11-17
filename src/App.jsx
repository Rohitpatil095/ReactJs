import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let value=21;
  
  const add=()=>{
    value+=1;
  };
  
  const sub=()=>
  {
    value-=1;
  }

  return (
    <>
      <h1>Lets Code Counter...</h1>

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
