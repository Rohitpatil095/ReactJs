import './App.css';
import Tablemain from './components/Tablemain';
import Tablestododata from "./components/Tablestododata";
function App() {

  const todos=[
    {srno:1,topic:"ds",desc:"dsa"},
  ];
  return (
    <div className="App">
      <h1>{todos[0].desc}</h1>
      <Tablemain />
      <Tablestododata todos={todos} />
    </div>
  );
}

export default App;
