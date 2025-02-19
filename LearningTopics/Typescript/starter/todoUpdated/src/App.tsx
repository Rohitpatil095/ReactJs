interface Todos {
  id: number;
  Title: string;
  description?: string;
}

const myTodoList: Todos[]=[{
    id:246,
  Title: "sfdd vv",
  description: "SFJ F PFO"
}]

function App() {
  return <>
    <MyTodoRender todo={myTodoList[0]}/>
  </>
}

function MyTodoRender(todo: Todos) {
  return <div>dfkl</div>;
}

export default App;
