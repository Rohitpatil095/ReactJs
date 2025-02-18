import todos from "../assets/data";
import { useState, useEffect } from "react";

function useTodos({ n }) {
  const [myTodos, setMyTodos] = useState(todos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let intCons = setInterval(() => {
      setMyTodos(todos[Math.floor(Math.random() * todos.length - 1)]);

      myTodos != todos[Math.floor(Math.random() * todos.length - 1)]
        ? setLoading(true)
        : setLoading(false);
    }, n * 1000);
    setMyTodos(todos[Math.floor(Math.random() * todos.length - 1)]);

    myTodos != todos[Math.floor(Math.random() * todos.length - 1)]
      ? setLoading(true)
      : setLoading(false);

      return(
        clearInterval(intCons)
      )
  }, [n]);

  return { myTodos, loading };
}

export default useTodos;
