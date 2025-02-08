import { useState } from "react";
import { atom, atomFamily, selectorFamily } from "recoil";
import { jods } from "../data/jodsStaticData";


// set default value based on param
export const staticAtomFamilyOfJods = atomFamily({
  key: 'atomFamilyOfJods',
  default: (id) => jods.filter(curr=> curr.id===id)
});

// set dyanamic value based on param value
export const dyanamicAtomFamilyOfJods = atomFamily({
  key: "dyanamicAtomFamilyOfJods",
  default: selectorFamily({
    key: "dyanamicAtomFamilyOfJods-selector",
    get: id=>({get})=>{
        return jods.filter(curr=>curr.id===id);
    }
  }),
});

export const dynamicAsyncAtomFamilyofJods = atomFamily({
  key: "dynamicAsyncAtomFamilyofJods",
  default: selectorFamily({
    key: "dynamicAsyncAtomFamilyofJodsSelectorFamily",
    get: (id)=> async({get})=>{
        await new Promise(()=> setTimeout(4000));
        return jods.filter((curr) => curr.id === id);
    }
  }),
});