export function Counter() {

    let [count, setCount] = useState(10);

    function addMore() {
      if (count < 20) {
        setCount(count + 1);
      }
    }

    function reduceMore() {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    <h1>dsjhdi</h1>
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello all...</h1>
      <br></br>
      <h3> value is {count}</h3>
      <button onClick={addMore}>Add More</button>
      <button onClick={reduceMore}> Reduce Me</button>
    </>
  );
}
