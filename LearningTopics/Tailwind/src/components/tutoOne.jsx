export function SimpleFirst() {
  return (
    <>
      <Todo></Todo>
    </>
  );
}

function Todo() {
  return (
    <div className="data-theme='dark' bg-white  grid grid-cols-2">
      <div>
        <h1 className="bg-red-300 dark:bg-yellow-800 md:bg-blue-700 font-bold underline flex-1">
          {" "}
          |----Hi there---|
        </h1>
      </div>
      <div>
        <h1 className="dark:text-gray-400 bg-red-300 font-bold underline flex-1">
          {" "}
          |----Hi there---|
        </h1>
      </div>
      <div>
        <h1 className="bg-red-300 font-bold underline flex-1">
          {" "}
          |----Hi there---|
        </h1>
      </div>
    </div>
  );
}
