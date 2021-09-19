"use strict";

//variables
//let const var

// let name;
// name = "Akshita";

// wrong
// const age;
// age = 34;

// const age= 23
// age = 34;

// var name;
// name = "sdfghj";

// scope and scope chain
// const name = "sdfgh";
// const n = 3;
// if (n == 3) {
//   // const and let are blocked scoped // function scoped;
//   const name = "akshita";
//   console.log(name);
//   var last = "dfghj"; // not block scope
//   //let first = " fghjk";
// }
// console.log(name);
// console.log(last);
// //console.log(first);

// template literal

//

//functions
// console.log(first);
// var first = "leanIn"; //
// fun("Akshita", "singh"); // temproral dead zone

// const fun = (n1, n2) => {
//   const first = n1;
//   const last = n2;
//   console.log(first, last);
// };

// hoisting  child fuctions have a baggagge of all variables that ur parent function has;
// const fun1 = () => {
//   const first = "Akshita";
//   const last = " singh";

//   const fun2 = () => {
//     console.log(first, last);
//   };
//   fun2();
// };

// fun1();

// this keyword
// objects

// arrow fuctions have no this keyword attached to it;
//for non arrrow fuctions this keyword  refers to the obj calling isTypedArray;
const obj = {
  name: "Akshita",
  age: "21",
  year: 2000,
  calcAge() {
    // this refers to the object calling the function
    console.log(this);
    return 2021 - this.year;
  },
};
// outside the objects this refers to the lexographical this.(for arrow function)

// window
// const calcAge = () => {
//   console.log(this);
//   // return 2021 - this.year;
// };
const n = obj.calcAge();

console.log(n);

// class students {
//     super(); // parent class constructor
//     students(){ // this class constructor
//       const age;
// this.age;
// this.name;

//       const name;
//     }
// }

// students Abc = new students();
