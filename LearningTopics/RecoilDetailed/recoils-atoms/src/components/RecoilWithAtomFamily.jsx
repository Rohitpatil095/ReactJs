import { useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from "recoil";
import {
  dynamicAsyncAtomFamilyofJods,
  staticAtomFamilyOfJods,
} from "../atoms/v1AtomFamily";

export default function RecoilAtomFamilyDemo() {
  return (
    <>
      {/* <Todo id="2" stat="static"></Todo>
      <Todo id="1" stat="static"></Todo>
      <Todo id="1"></Todo> */}
      <TodoAsync id="1" stat="nonstats"></TodoAsync>
    </>
  );
}

function Todo({ id, stat }) {
  const todoStaticValue = useRecoilValue(staticAtomFamilyOfJods(id));
  return (
    <div>
      {/* {console.log(todoStaticValue)} */}
      {stat === "static"
        ? "Static atom family content"
        : "non-Static atom family content"}
      <br></br>
      id={todoStaticValue[0].id}
      <br></br>
      name: {todoStaticValue[0].name}
    </div>
  );
}

function TodoAsync({ id, stat }) {
  return (
    <div>
      {stat === "static"
        ? "Static atom family content"
        : "non-Static atom family content"}
      <br></br>
      {renderData(id)}
    </div>
  );
}

function renderData(id) {
  const todoStaticValue = useRecoilValueLoadable(
    dynamicAsyncAtomFamilyofJods(id)
  );

  const [todo,setTodo] = useRecoilStateLoadable(
    dynamicAsyncAtomFamilyofJods(id)
  );
  
  console.log("from async comp---> " + todo.contents.id);
  console.log("from async comp " + todoStaticValue.contents);
  return <></>;
  //   switch (todoStaticValue.state) {
  //     case "loading":
  //       return <>loading...</>;
  //     case "hasValue":
  //       return (
  //         <>
  //           id={todoStaticValue[0].id}
  //           <br></br>
  //           name: {todoStaticValue[0].name}
  //         </>
  //       );
  //     case "hasError":
  //       return <>error...</>;
  //     default:
  //       return <></>;
  //   }
}
