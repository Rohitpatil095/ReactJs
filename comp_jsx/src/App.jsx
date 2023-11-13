import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderCommon from '../src/components/headers/Header'
import {logoData} from './data';

function LogoDataExtractor(props)
{
  return (
    <>
      <img src={props.logoLink} className="logo" alt={props.logoName} />
      <h1>{props.someName}</h1>
      <h2>{props.logoName}</h2>
    </>
  );
}

// function LogoDataExtractor({logoName,logoLink})
// {
//   return (<img src={logoLink} className="logo" alt={logoName} />);
// }




function OtherFunction()
{
  return(
    <>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderCommon />
      <h1>Some things</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <OtherFunction/>

      
    </>
  );
}

export default App
