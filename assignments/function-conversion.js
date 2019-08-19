// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

console.log("--------------------");
console.log("FUNCTION-CONVERSION.JS CHALLENGES: ")

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

myFunction = () => {
    console.log("Function was invoked!");
}
myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) => param;
console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
add = (param1, param2) => param1+param2;
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

subtract = (param1, param2) => param1-param2;
console.log(subtract(1,2));

// Stretch

console.log("--------------------");
console.log("FUNCTION-CONVERSION.JS STRETCH GOALS: ")

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);