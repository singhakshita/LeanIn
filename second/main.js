const deposit = [
  { amount: 28000, date: "12/10/2000" },
  { amount: 90000, date: "12/11/2000" },
  { amount: 28800, date: "12/12/2000" },
];

const withdraw = [
  { amount: 28000, date: "12/10/2000" },
  { amount: 90000, date: "12/11/2000" },
  { amount: 28800, date: "12/12/2000" },
];

const inputName = document.querySelector("#name");
const heading = document.querySelector(".main__heading");
const cards = document.querySelector(".main__cards");
const eachCard = document.querySelectorAll(".main__card");

inputName.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key == "Enter") {
    updateValue(inputName.value);
    inputName.value = "";
  }
});

cards.addEventListener("click", (event) => {
  cards.style.backgroundColor = "red";
  eachCard.forEach((elem) => elem.classList.remove("active__card"));
  const elem = event.target.closest(".main__card");
  elem.classList.add("active__card");
  const htmlArr = [...eachCard];
  const inactiveElems = htmlArr.filter(
    (elem) => elem.classList.contains("active__card") === false
  );
  console.log(inactiveElems);
  const [a, b] = inactiveElems;
  const newElem = [a, elem, b];
  cards.innerHTML = "";
  newElem.forEach((elem) => cards.insertAdjacentElement("beforeend", elem));
});
const updateValue = function (name) {
  heading.innerHTML = `Welcome to our Bank ${name} `;
};

