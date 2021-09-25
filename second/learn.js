//link javascript
// prettier
const year = new Array(1999, 200000, 677);
let length = year.push(29000); // returns new size

length = year.unshift(28); // adds element in the begining and returns new length

length = year.pop(); // returns the removed element , removes from last

length = year.shift(); // returns the removed element , removes from first

let ans = year.indexOf(1980); // if element doesnt exist then returns -1

ans = year.indexOf(1999); // returns index

ans = year.includes(233); // returns boolean

const arr = [2, 3, 4, 5, 9];
//const [x, y, z] = arr;
let y = 0;
const [x, , z] = arr;
//console.log(x, y, z);

//spread operator
const newArr = [...arr, 1, 2, 3];
//console.log(newArr);

//rest operator
const [a, b, ...other] = [1, 2, 3, 4, 5];
//rest operator
const [a, b, ...other] = [1, 2, 3, 4, 5];
//console.log(a, b);
//console.log(other);

for (let items of other) {
  //for of loop
  //console.log(items);
}

for (let items of other.entries()) {
  //   console.log(items); // item is an array
  //console.log(`The ${items[0]} is ${items[1]}`);
}

let slicedArr = arr.slice(1, 4); // returns a new array invlusive first index , exclusive last , 1 based indexing
slicedArr = arr.slice(-1); // last elments , new array
//console.log(slicedArr);

let spliced = arr.splice(2, 2); // changes the original array , returns the removed elements
//console.log(arr);
let idx = 0;
arr.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});
