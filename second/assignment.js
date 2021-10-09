const customer = [
  {
    id: 01,
    name: "Akshita",
    type: "savings",
    account_No: 12345566,
  },
  { id: 02, name: "Ruchi", type: "savings", account_No: 45678990 },
  { id: 03, name: "Nisha", type: "savings", acoount_No: 1433546476 },
];

const transaction = [
  {
    01: [
      [-22000, new Date(2000, 8, 12)],
      [30000, new Date(2000, 9, 12)],
      [-23333, new Date(2000, 10, 12)],
      [39999, new Date(2000, 11, 12)],
      [788999, new Date(2000, 6, 12)],
    ],
  },
  {
    02: [
      [-3789899, new Date(2000, 8, 12)],
      [+2344444, new Date(2000, 9, 12)],
      [899000, new Date(2000, 0, 12)],
      [-23883, new Date(2000, 7, 12)],
    ],
  },
  {
    03: [
      [89999, new Date(2000, 9, 12)],
      [-5789, new Date(2000, 9, 12)],
    ],
  },
];
// transtions are given as key value pair , where key is customer id , '-' denotes withdrawl amount and positive number shows deposits

// Assignment :
// 1. when  the person enters his name in the input box  , read the input , fetch his data from customer object and display his details in the profile area . search the user's transaction from transaction array on the basis of his id.
// calculate his total balance.
// 2. calculate all deposit sum and display in green color and all withdrawl sum , display in green color.Assignment
// 3. filter all deposit , and withdrawl and diaplay in their respective area.
// 4. add functionality to read amount input and display it on the DOM
// 5. implement the sort functionality on the bnasis if amount.

// date manipulation :
// const month = date.toLocaleString("en-US", { month: "long" }); //october e.g.
// const day =  date.toLocaleString("en-US", { day: "2-digit" }); //01
// const year = date.getFullYear(); //2021
// here date = new Date(2012, 9, 1);
// new Date(year, month(0-11)(o based indexing , 0: january 11: december) ,day (no trailimg zeros) );
