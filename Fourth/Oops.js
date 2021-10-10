"use strict";
// const num = [2, 3, 5];
// // console.log(num.__proto__);
// // console.log(num instanceof Array);
// const arr = new Array();
// // num is an instance of that Array class.

// console.log(num.__proto__);
// console.log(Array.prototype);

// console.log(Array.__proto__); //== Object.prototype
// arrow functions do not have their own this key word = this == general this = window object.

//constructor
// const Student = function (name, birthday, enrol) { // constructor
//   this.name = name;
//   this.birthday = birthday;
//   this.enrol = enrol;
// };

// Student.prototype.calcAge = function () { // to add methods
//   return 2021 - this.birthday;
// };

// const Akshita = new Student("Akshita", 2000, 6);
// console.log(Akshita.__proto__);
// console.log(Student.__proto__);
// console.log(Akshita.prototype);
// console.log(Student.prototype);

// // 1.an empty object is created called this
// // 2. properties are added on this
// // 3. object is linked to its prototype
// // 4. this object is returned

// console.log(Akshita.calcAge());

//ES6 classes

class Person {
  constructor(name, birthyear) {
    _this.name = name; // setter function call //private // to make properties as private _;
    this.birthyear = birthyear;
    this.marks = [];
  }
  #calcAge() {
    //to make methods private
    // public  Interface API
    console.log(2021 - this.birthyear);
  }
  static greet() {
    // hiding the details
    console.log("Hi");
  }

  get name() {
    return this._name;
  }
  set name(name) {
    // always takes exactly one parameter
    if (name.includes(" ")) {
      this._name = name;
    } else {
      this._name = "wrong";
    }
  }
}

// const Akshita = new Person("AkshitaSingh", 2000);

// // console.log(Akshita.__proto__);
// // console.log(Person.prototype);
// // console.log(Akshita);
// //Akshita.greet();
// // Person.greet();

// const data = Akshita.name;
// console.log(data);

// const StudentProto = {
//   calcAge() {
//     console.log(this.age);
//   },
// };
// const Akshita = Object.create(StudentProto);
// Akshita.age = 20;
// Akshita.calcAge();
