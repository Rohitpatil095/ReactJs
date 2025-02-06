import { useState } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import RecoilV1 from "./components/RecoilV1";
import RecoilAtomFamilyDemo from "./components/RecoilWithAtomFamily";

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <RecoilV1 /> */}
        <RecoilAtomFamilyDemo/>
      </RecoilRoot>
    </>
  );
}

export default App;
