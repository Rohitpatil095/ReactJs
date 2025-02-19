"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let x = 454;
console.error(x);
function printName(fName, lName) {
    return fName + lName;
}
function SomeFunction(anotherFunction) {
    return __awaiter(this, void 0, void 0, function* () {
        setInterval(() => {
            console.log(1);
        }, anotherFunction());
    });
}
function otherFunction() {
    return 3000;
}
function printMe() {
    console.log("From printMe()");
}
SomeFunction(otherFunction);
// function SomeOtherFunction(): void{
//     console.log("Pringiting");
// }
// SomeFunction(SomeOtherFunction);
//function accpet other function ---> which takes no arg and also return void 
function MyNewFunction(fun) {
    setTimeout(() => {
        fun();
    }, 2000);
    setInterval(() => {
        fun();
    }, 2000);
}
MyNewFunction(printMe);
