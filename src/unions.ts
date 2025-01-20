// union types
let id: string | number = 25;

function retUnionType<T>(param: T) {
  return param;
}

// let result = retUnionType<string>(true); // error
// let result = retUnionType<string>("Sarthak"); // output Sarthak
// let result = retUnionType<string>(56); // error
// let result = retUnionType<number>(56); // output 56
