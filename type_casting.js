/**
 * ngữ cảnh: mình sẽ hiểu nó ép kiểu dữ liệu
 */
// ép kiểu dữ ngầm định
var num = 10;
var strNumber = num.toString();
console.log("strNumber", typeof strNumber);
// ép kiểu theo cách tường minh
var str = "10";
var convertNumber = Number(str);
console.log("convertNumber", typeof convertNumber);
var somethingStr = "Hello World";
var lengthStr = somethingStr.length;
console.log("lengthStr", typeof lengthStr);
// demo bài số 1:
var myVariable = "10";
var myVariable2 = 10;
console.log(typeof myVariable);
console.log(typeof myVariable2.toString());
