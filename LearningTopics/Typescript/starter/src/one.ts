let x: number = 454;
console.error(x);



function printName(fName: string, lName: string): string {
  return fName + lName;
}

async function SomeFunction(anotherFunction:Function): Promise<void>{
    setInterval(()=>{
        console.log(1);
    },anotherFunction());
}

function otherFunction():number{
    return 3000;
}
function printMe(): void {
 console.log("From printMe()");
}

SomeFunction(otherFunction);
// function SomeOtherFunction(): void{
//     console.log("Pringiting");
// }
// SomeFunction(SomeOtherFunction);

//function accpet other function ---> which takes no arg and also return void 
function MyNewFunction(fun:()=> void){
    setTimeout(()=>{
        fun();
    },2000);

    setInterval(() => {
      fun();
    }, 2000);
}

MyNewFunction(printMe);


