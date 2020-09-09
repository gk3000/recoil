import { atom } from "recoil";

export const titleState = atom({
  key: "titleState",
  default: ""
});

export const resultState = atom({
    key: "resultState",
    default: []
  });
