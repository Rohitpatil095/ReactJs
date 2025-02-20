// generics
type key = string | number;

function someLocation(lc: key[]) {
  for (let i = 0; i < lc.length; i++) {
    console.log(lc[i]);
  }
}

function someLocationOther(lc: string | number): string | number {
  return lc;
}
someLocation([35, 23, 689, 980]);
someLocation(["east", "south east"]);

// more userfriendly with generics

function someLocationUpdated<T>(lc: T[]) {
  for (let i = 0; i < lc.length; i++) {
    console.log(lc[i]);
  }
}

const a= [35, 23, 689, 980];
const b: string[] = ["east", "south east"];
// const c: string[] = [true,false,false,true]; // not allowed
someLocation(a);
someLocation(b);
