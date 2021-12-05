class SidePalleteViews {
  _mainPallet = document.querySelector(".main__body--side-pallete");

  getHtml = (type, item) => {
    const className = type == 0 ? "type__author" : "type__genre";
    const html = `<div class="side__pallete--item" data-type="${type}" id="${item}">
    <div class="side__pallete-type ${className}" ></div>
    <div class="side__pallete-data">${item.toUpperCase()}</div>
  </div>`;
    return html;
  };

  displayData = (arr, type) => {
    this._mainPallet.innerHTML = "";
    arr.forEach((elem) => {
      const html = this.getHtml(type, elem);
      this._mainPallet.insertAdjacentHTML("beforeend", html);
    });
  };
  clickHandler(handler) {
    this._mainPallet.addEventListener("click", function (event) {
      const obj = event.target.closest(".side__pallete--item");
      const type = obj.dataset.type;
      const id = obj.id;
      handler(type, id);
    });
  }
}

export default new SidePalleteViews();
