// generic in typescript
function myFunc<T>(parameterOne: T) {
  return "parameterOne" as T;
}

let res: number = myFunc<number>(20);
console.log(res);

// tuples in TS. Note in JS we don't have tuples
let personTuple: [string, number, number, boolean?];
personTuple = ["Sarthak", 25, 100000];
