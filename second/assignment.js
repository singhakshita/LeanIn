const customer = [
  {
    id: 01,
    name: "Akshita",
    type: " savings",
    account_No: 12345566,
    transaction: [
      [2000, new Date(2000, 11, 12)],
      [-2290, new Date(2000, 10, 2)],
      [2788, new Date(2000, 11, 12)],
      [-2290, new Date(2000, 10, 2)],
    ],
  },
  {
    id: 02,
    name: "Ruchi",
    type: "savings",
    account_No: 45678990,
    transaction: [
      [2000, new Date(2000, 11, 12)],
      [-2290, new Date(2000, 10, 2)],
    ],
  },
  {
    id: 03,
    name: "Nisha",
    type: "savings",
    acoount_No: 1433546476,
    transaction: [
      [2000, new Date(2000, 11, 12)],
      [-2290, new Date(2000, 10, 2)],
    ],
  },
];

let AccountHolder;
const inputName = document.querySelector("#name");

const depositCards = document.querySelector(".deposit__cards");
const depositButton = document.querySelector(".deposit__button");
const depositInput = document.querySelector(".deposit__input");
const depositSort = document.querySelector(".deposit__sort");

const withdrawCards = document.querySelector(".withdraw__cards");
const withdrawButton = document.querySelector(".withdraw__button");
const withdrawInput = document.querySelector(".withdraw__input");
const withdrawSort = document.querySelector(".withdraw__sort");

const withdrawPalet = document.querySelector(".account__transaction__withdraw");
const depositPalet = document.querySelector(".account__transaction__deposit");

const convertToDate = (today) => {
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yy = today.getFullYear();
  today = dd + "/" + mm + "/" + yy;
  return today;
};

const displayCards = (amount, type, parent, date) => {
  const html = `<div class="main__method-card">
  Rs. ${amount} ${type} Dated : ${convertToDate(date)}
  </div>`;

  parent.insertAdjacentHTML("afterbegin", html);
};
depositButton.addEventListener("click", function () {
  displayCards(depositInput.value, "deposit", depositCards, new Date());
  depositInput.value = "";
});

withdrawButton.addEventListener("click", function () {
  displayCards(withdrawInput.value, "withdraw", withdrawCards, new Date());
  withdrawInput.value = "";
});

depositSort.addEventListener("click", function () {
  AccountHolder.withdraws.sort();
  displayCards.innerHTML = "";
});

inputName.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let user = inputName.value;
    inputName.value = "";
    const userdata = customer.filter((elem) => elem.name == user);
    const transferData = userdata[0].transaction;
    let depositAmount = 0;
    let withdrawlAmount = 0;
    let depositArray = [];
    let withdrawArray = [];
    transferData.forEach((elem) => {
      if (elem[0] > 0) {
        depositAmount += elem[0];
        displayCards(elem[0], "deposit", depositCards, elem[1]);
        depositArray.push(elem);
      } else {
        withdrawlAmount += elem[0] * -1;
        displayCards(elem[0] * -1, "withdraw", withdrawCards, elem[1]);
        withdrawArray.push(elem[0]);
      }
    });
    userdata.withdraws = withdrawArray;
    userdata.deposits = depositArray;
    console.log(userdata);
    AccountHolder = userdata;
    depositPalet.innerHTML = "Rs" + " " + String(depositAmount);
    withdrawPalet.innerHTML = "Rs" + " " + withdrawlAmount;
  }
});

//array --> object --> key : Value == array.Date

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
// const day = date.toLocaleString("en-US", { day: "2-digit" }); //01
// const year = date.getFullYear(); //2021
// here date = new Date(2012, 9, 1);
// new Date(year, month(0-11)(o based indexing , 0: january 11: december) ,day (no trailimg zeros) );
