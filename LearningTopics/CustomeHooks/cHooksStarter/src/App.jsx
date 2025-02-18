import useTodos from "./hooks/Todos";

function App() {
  const { myTodos, loading } = useTodos(2);

  return (
    <>
      <Todo todo={myTodos} isLoaded={loading} />
    </>
  );
}

function Todo({ todo, isLoaded }) {
  return (
    <div>
      {isLoaded ? "" : "Loading content"}
      <br></br>
      Task: {todo.name}, <br></br>Des:{todo.description}
    </div>
  );
}

export default App;
