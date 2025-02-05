import { useRecoilValue, useSetRecoilState } from "recoil";
import { connectionRequestV1Constant, notficationV1Constant, totalV1Count } from "../atoms/v1atoms";

export default function RecoilV1() {
  const notificationV1Value = useRecoilValue(notficationV1Constant);
  const messagesV1Value = useRecoilValue(connectionRequestV1Constant);
  const total = useRecoilValue(totalV1Count);
  // const notificationV1SetValue = useSetRecoilState(notficationV1Constant);

  return (
    <>
      <h1>
        Notifications(
        {notificationV1Value > 100 ? "99+" : notficationV1Constant})
      </h1>
      {/* <br></br> */}
      <h1>
        Connections(
        {messagesV1Value > 100 ? "99+" : messagesV1Value})
      </h1>
      {/* <br></br> */}
      <h2>Me ({total})</h2>
      {/* <LpButton /> */}
      {/* <button type="button" onClick={notificationV1SetValue((s) => s + 1)}>
      Add
    </button> */}
    </>
  );
}

function LpButton() {
  // return (
  // );
}
