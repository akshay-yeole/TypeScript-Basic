//Variables in TS
//var   : function scoped
//let   : block scoped
//const : block scoped and value will not change

//Data Types :
//Primitive  : 1. number 2. string 3. bool
//If the data type is not explicitly defined, ts uses "automatic type reference"
//Examples : var/let/const <<variable-name>> : <<data-type>> =<<value>>

let x: number = 10;
let y: string = "Hello, Buddy";
let isValid: boolean = true;

console.log(`X :: ` + x + `\nY :: ` + y + `\nisValid :: ` + isValid);

//let emp: employee = new Employee();
//OR
//let emp = new Employee(); //automatic type reference

let j: any = 100;
let k: any = "Hello typescript";

console.log(`\nj :: ` + j + `\nk :: ` + k);
