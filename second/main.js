//functions passed as parameter are called call back function
// let booloenVariable = false;
// let booloenVar = "false";
//let a = 2;
//console.log(typeof a);

// array
//const arr = [2, 3, 4];
// console.log(arr);
// const newArr = new Array(23, 45, 56);
// let length = arr.pop();

// length = arr.unshift(1);

// console.log(arr, length);
// length = arr.shift();
// console.log(length);

// let idx = arr.indexOf(5);
// console.log(idx);

// let isthere = arr.includes(7);
// console.log(isthere);

//destructuring operator
// let y = 0;
// const arr = [2, 3, 4];
// const [x, z] = arr;
// console.log(x, y, z);

// //spread
// const newArr = [...arr, 1, 2]; // 2 3 4 1 2
// console.log(newArr);
// [0, 2], [1, 3];

// //rest opposite of spread
// const [a, b, ...other] = newArr;
// console.log(a, b, other);

// // for of
// for (let item of newArr) {
//   console.log(item);
// }
// for (let item of newArr.entries()) {
//   // arr ofg two elemnsts  first is index other is item
//   console.log(`The ${item[0]} th is ${item[1]}}`);
// }
// 2 3 4 1 2 newArr
//  1 2 3 4 5
// let ans = newArr.slice(3);
// spilce manipilates the new array
// slice returns thge new array;
// let ans = newArr.splice(2, 2); // removing , first parameter denotes from which idx start splicing, 2nd shows how many elkemnts have to be removed
// console.log(ans);
// console.log(newArr);

//arr.splice();
// let ans = newArr.reverse();
// console.log(ans);
// ans = arr.concat(newArr);

//forEach // callback
// const print = function(){

// }
// let arr = [1, 2, 3, 4, 5];
// // let arr = 2;
// // const print = (arr) => arr * 2;
// // console.log(print(arr));
// arr.forEach((item, __, array) => console.log(item, array));
//hoisting : using a function befire its declaration
const inputName = document.querySelector("#name");
const heading = document.querySelector(".main__heading");
const cards = document.querySelector(".main__cards");
inputName.addEventListener("keydown", (evet) => {
  if (event.key == "Enter") {
    updateValue(inputName.value);
    inputName.value = "";
  }
});
// closest function gives me the name of the parent class
cards.addEventListener("click", (event) => {
  console.log(event.target.closest(".main__card"));
});
const updateValue = function (name) {
  heading.innerHTML = `Welcome to our Bank ${name} `;
};

//add event listner to the parent class
//find out on which card the event has taken place

// assignment
// //remove active class from all of them
// add active class into one child
