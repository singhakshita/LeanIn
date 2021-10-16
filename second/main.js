const inputName = document.querySelector("#name");
const deposit = document.getElementById("deposit");
const heading = document.querySelector(".main__heading");
const cards = document.querySelector(".main__cards");
const eachCard = document.querySelectorAll(".main__card");

const readAndDisplayInput = function (inputField, domField) {
  const value = inputField.value;
  if (inputField == name) {
    const html = `<div class="main__method-card">
    Rs. 2000 Deposited Dated : 20/10/2000
  </div>`;
  }
  const msg = `loan is approved`;
  domField.insertAdjacentHtml(beforeend, html);
};
cards.addEventListener("click", (event) => {
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
  const paddedName = name.pad("", max);
  heading.innerHTML = `Welcome to our Bank ${paddedName} `;
};
