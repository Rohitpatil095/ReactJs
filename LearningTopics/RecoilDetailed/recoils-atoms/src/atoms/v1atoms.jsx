import { atom, selector } from "recoil";

export const notficationV1Constant = atom({
  key: "notficationV1Constant",
  default: 120,
});

export const connectionRequestV1Constant = atom({
  key: "connectionRequestV1Constant",
  default: 10,
});

export const totalV1Count = selector({
  key: "totalV1Count",
  get: ({ get }) => {
    const notifications = get(notficationV1Constant);
    const messages = get(connectionRequestV1Constant);

    return notifications + messages;
  },
});
