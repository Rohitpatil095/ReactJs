import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoTable from "./components/TodoTable";
import CreateTodoTask from "./components/CreateTodoTask";

function App() {
  const [count, setCount] = useState(0)

  const [data,setData] =useState([
    { srno: 1, topic: "some1 ", desc: "some 1 desc" },
    { srno: 2, topic: "some2 ", desc: "some 2 desc" },
    { srno: 3, topic: "some3 ", desc: "some 3 desc" },
  ]);

  const addme=(topic,description)=>
  {
    let rowNum=0;
    if (data.length > 0) {
      rowNum = data[data.length-1].srno + 1;
    }
    else
    {
      rowNum=1;
    }
    let newtodo = {
      srno: rowNum,
      topic: topic,
      desc: description,
      // topic: {userData.topic},
      // desc: {userData.desc},
    };
    setData(data =>[...data,newtodo]);
    // else{
    //   let newtodo = {
    //     srno: data.length+1,
    //     topic: "no data",
    //     desc: "no data",
    //   }
    //   setData(data=>[...data,newtodo]);
    // }
  }

  const deleteData= (rowNum)=>
  {
    let filteredData= data.filter(
        function(value)
        {
          return value.srno!== rowNum;
        }
    )
    
    setData(filteredData);

  }

  const[showTodo, setShowTodo] = useState(false);

  return (
    <>
      <div className="card mt-5">
        <TodoTable todos={data} deleteCurrRow={deleteData}/>
        <button className="btn btn-primary">Add</button>
        <CreateTodoTask addFun={addme} />
      </div>
    </>
  );
}

export default App
