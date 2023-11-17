import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const funs = [
//   smallCharGenerator(),
//   largeCharGenerator(),
//   symbolGenerator(),
//   numGenerator(),
// ];
// const numbers=[0,1,2,3,4,5,6,7,8,9]
// const symbols= ["!","~","@","#","&"];

// let pass=[]
// let someRandomNum=0

// function smallCharGenerator()
// {
//   const someRandom=((Math.random()*(122-97))+97);
//   return String.fromCharCode(someRandom);
// }
// function largeCharGenerator()
// {
//   const someRandom = ((Math.random() * (90 - 65)) + 65);
//   return String.fromCharCode(someRandom);
// }
// function symbolGenerator()
// {
//   const someRandom=((Math.random()*(symbols.size-0+1))+0);
//   return someRandom;
// }
// function numGenerator()
// {
//   const someRandom =(( Math.random() * (numbers.size - 0 + 1)) + 0);
//   return someRandom;
// }

// const someRandome=0;
// function generateRandomPass(size=8,isSymbol=false,isNum=false)
// {
//     someRandom = ((Math.random() * (funs.size-0))+0);
//     pass.push(someRandome);
//   // for(let i=0;i<size;i++)
//   // {
//   //   someRandom = ((Math.random() * (funs.size-0))+0);
//   //   pass.push(someRandome);
//   // }
//   // if(isSymbol && isNum)
//   // {
//   // }
//   // else if(isSymbol)
//   // {
//   // }
//   // else if(isNum)
//   // {
//   // }
// }

function App() {
  
const funs = [
  smallCharGenerator(),
  largeCharGenerator(),
  symbolGenerator(),
  numGenerator(),
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "~", "@", "#", "&"];

let pass = [];
let someRandomNum = 0;

function smallCharGenerator() {
  const someRandom = Math.random() * (122 - 97) + 97;
  return String.fromCharCode(someRandom);
}
function largeCharGenerator() {
  const someRandom = Math.random() * (90 - 65) + 65;
  return String.fromCharCode(someRandom);
}
function symbolGenerator() {
  const someRandom = Math.random() * (symbols.size - 0 + 1) + 0;
  return someRandom;
}
function numGenerator() {
  const someRandom = Math.random() * (numbers.size - 0 + 1) + 0;
  return someRandom;
}

const someRandome = 0;
function generateRandomPass(size = 8, isSymbol = false, isNum = false) {
  someRandom = Math.random() * (funs.size - 0) + 0;
  pass.push(someRandome);
  // for(let i=0;i<size;i++)
  // {
  //   someRandom = ((Math.random() * (funs.size-0))+0);
  //   pass.push(someRandome);
  // }
  // if(isSymbol && isNum)
  // {
  // }
  // else if(isSymbol)
  // {
  // }
  // else if(isNum)
  // {
  // }
}


  let [passValue, generatePass]= useState('Efef23WE#5sd');

  console.log(generateRandomPass());
  return (
    <>
      <div className="passGenMainContainer">
        <div>
          <div>
            <input type="text" name="pass" value="{}" />
            <button>copy</button>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="slider"
              id="passLen"
            />
            <h4>Length{}</h4>
            <input
              type="checkbox"
              id="numbers"
              name="numbers"
              value="numbers"
            />
            <label for="numbers">Numbers</label>
            <input
              type="checkbox"
              id="symbols"
              name="symbols"
              value="symbols"
            />
            <label for="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
