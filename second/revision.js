//  year = [1945, 13879, 45];
// const days = new Array(1234, 124, 12444, 234); // create an object of array class
// console.log(days);

// //methods of array
// let length = days.push(23); // its adds an element into an array and returns new  length

// length = days.pop(); // removes the last elment and returns it
// console.log(length);

// length = days.shift(); // used for removing elements from the end.

// length = days.unshift(12); // adds element on oth idx

// let idx = days.indexOf(12);

// idx = days.indexOf(9);
// console.log(idx);

// let has = days.includes(12);
// console.log(has);

// //destructing operator
// const [x, , z] = days;
// //[12, 1234, 124];
// console.log(x, z);

// //spread operator
// //... days == [ 12, 123, 134];
// const newArr = [2, 3, ...days];
// console.log(newArr);
// const Newdays = [...days]; // copying the array;

// //rest operator
// const [a, b, ...other] = days;
// console.log(a);
// console.log(b);
// console.log(other);
//for of

// for (let item of days) {
//   console.log(item);
// }
// days.entries(); [ [0, 12], [1,24], ]
// for (let eachItem of days.entries()) {
//   console.log(`The ${eachItem[0]}th element of days array is ${eachItem[1]}`);
// }

//functions passed as parameter into another function are called callback funcs
//for each loop //callback based loop
// days.forEach((item) => {
//   console.log(item, arr);
// });

// const func = function (days) {
//   return days;
// };
// const funcArrow = (days) => days;
// const arr = funcArrow(days);
// console.log(arr);

const days = [12, 24, 36, 48];
// slice

// let slicedArr = days.slice(-3); // first idx inclusive
// console.log(slicedArr);
// console.log(days);

const spliced = days.splice(1, 3); // last idx is also inclusive
console.log(spliced);
console.log(days);
