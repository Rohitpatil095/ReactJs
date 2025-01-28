import { useRecoilState, RecoilRoot, useRecoilValue } from "recoil";
import { evenOdd } from "../../store/atoms/EvenOdd";

export default function RenderEvenOddSimple() {
  return (
    <>
      <RecoilRoot>
        <RenderEvenOdd />
      </RecoilRoot>
    </>
  );
  // const evenOddValue=useRecoilValue(evenOdd)
}

function RenderEvenOdd() {
  const [evenOddValue, setEvenOddValue] = useRecoilState(evenOdd);
  const recoiled = useRecoilValue(evenOdd);
  return (
    <>
      Counter is {recoiled}
      <br></br>
      <button onClick={setEvenOddValue((val) => val + 1)}>Increment</button>
      <button onClick={setEvenOddValue((val) => val - 1)}>Decrement</button>
      <br></br>
      <p>{recoiled % 2 === 0 ? "Even Value" : "Odd Value"}</p>
    </>
  );
}
