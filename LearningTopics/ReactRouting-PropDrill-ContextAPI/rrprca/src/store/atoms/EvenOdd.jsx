import { atom } from "recoil";

export const evenOdd = atom({
  key: "evenOddAtom",
  default: [0],
});

export const evenOddText = atom({
  key: "evenOddTextValue",
  default: ["default"],
});
