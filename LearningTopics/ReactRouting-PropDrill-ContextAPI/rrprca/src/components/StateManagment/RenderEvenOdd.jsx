import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { evenOdd, evenOddText } from "../../store/atoms/EvenOdd";

export default function RenderEvenOdd() {
  return (
    <>
      <RecoilRoot>
        <RenderCounterEvenOdd />
      </RecoilRoot>
    </>
  );
}

function Buttons() {
  return (
    <>
      <button type="button" onClick={handleEvenOddValueChangeIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleEvenOddValueChangeDecrement}>
        Decrement
      </button>
    </>
  );
}

function handleEvenOddValueChangeIncrement() {
  const evenOddValueSet = useSetRecoilState(evenOdd);
  evenOddValueSet((oldCou) => oldCou + 1);
  evenOddTextValue();
}

function handleEvenOddValueChangeDecrement() {
  const evenOddValueSet = useSetRecoilState(evenOdd);
  evenOddValueSet((oldCou) => oldCou - 1);
  evenOddTextValue();
}

function evenOddTextValue() {
  const setEvenOddTextValue = useSetRecoilState(evenOddText);
  const evenOddValue = useRecoilValue(evenOdd);

  //   const [evenOddTextValue, setEvenOdTextdValue] =
  //     useRecoilState(evenOddTextValue);

  if (evenOddValue % 2 === 0) {
    setEvenOddTextValue("Even");
  } else {
    setEvenOddTextValue("Odd");
  }
}

function RenderCounterEvenOdd() {
  const evenOddValue = useRecoilValue(evenOdd);
  const evenOddTextValue = useRecoilValue(evenOddText);
  return (
    <div>
      Counter value is {evenOddValue}
      <Buttons />
      Value is {evenOddTextValue}
    </div>
  );
}
