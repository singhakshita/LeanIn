//A constructur method
// const Company = function (revenue, employee) {
//   this.revenue = revenue;
//   this.employee = employee;
// };

// Company.prototype.hiring = function (grade) {
//   if (grade > 7.5) {
//     return true;
//   }
// };
// Company.prototype.get = function () {
//   return this.employee;
// };

// const google = new Company("10B$", "0M");
// console.log(google.revenue);
// console.log(google.employee);
// console.log(google.hiring(8));
// console.log(google.get());

// B Object.create;

// const Companyproto = function (revenue, employee) {
//   this.revenue = revenue;
//   this.employee = employee;
// };
// const childProto = function () {
//   this.mainStream = "googleMaps";
// };

// childProto.prototype = Object.create(Companyproto);
// const google = Object.create(Companyproto);
// google.revenue = "1M";
// google.employee = "2M";

// console.log(google);

//ES6 classes
// class Company {
//   constructor(revenue, employee) {
//     this.revenue = revenue;
//     this.employee = employee;
//   }
//   hiring(grade) {
//     if (grade > 7.5) return true;
//     else return false;
//   }
//   set revenue(rev) {
//     if (rev < "1M") {
//       this.rev = "1M";
//     } else this.rev = "2M";
//   }
//   get revenue() {
//     return this.revenue;
//   }
// }

// class Google extends Company {
//   constructor(rev, emp, mainstream) {
//     super(rev, emp);
//     this.mainstream = mainstream;
//   }
//   release() {
//     console.log(`alpha version of ${this.mainstream} released`);
//   }
// }

// const company1 = new Google("0M", "2M", "google Maps");
// console.log(company1);

const arr = [10, 1, 111, 10];
arr.sort();
console.log(arr);
