class Parent {
  setParent(parentContainer, html) {
    parentContainer.insertAdjacentHTML("afterbegin", html);
  }
  clearParent(parentContainer) {
    parentContainer.innerHTML = "";
  }
}
export default Parent;
