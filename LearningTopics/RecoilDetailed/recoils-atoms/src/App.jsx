import { useState } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import RecoilV1 from "./components/RecoilV1";

function App() {
  return (
    <>
      <RecoilRoot>
        <RecoilV1 />
      </RecoilRoot>
    </>
  );
}

export default App;
