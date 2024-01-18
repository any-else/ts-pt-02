/**
 * ngữ cảnh: mình sẽ hiểu nó ép kiểu dữ liệu
 */

// ép kiểu dữ ngầm định

let num: number = 10;
const strNumber: string = num.toString();

console.log("strNumber", typeof strNumber);

// ép kiểu theo cách tường minh
let str: string = "10";
let convertNumber: number = Number(str);
console.log("convertNumber", typeof convertNumber);

type Hello = "Hello World";
const somethingStr: Hello = "Hello World";

const lengthStr: number = (somethingStr as string).length;

console.log("lengthStr", typeof lengthStr);

// demo bài số 1:

let myVariable: any = "10";

let myVariable2: any = 10;

console.log(typeof myVariable as string);

console.log(typeof myVariable2.toString());
