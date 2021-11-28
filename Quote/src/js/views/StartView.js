import Parent from "./Parent";
class StartView extends Parent {
  _quotes = document.querySelector(".main__body-quotes");

  _getHtml(images, data, idx) {
    const className = idx % 2 == 0 ? "" : "odd";
    const html = `<div class="main__body-quote ${className}">
    <img
      src="${images[idx]}"
      class="main__body-quote__img"
      alt="${data[idx].genre}"
    />
    <div class="main__body-quote__data">
      <div class="main__body-quote__data-genre">${data[
        idx
      ].genre.toUpperCase()}</div>
      <div class="main__body-quote__data-text">${data[idx].text}</div>
      <div class="main__body-quote__data-author">${data[idx].author}</div>
    </div>
  </div>`;
    return html;
  }
  setStartPage(images, data) {
    this.clearParent(this._quotes);
    const n = images.length < data.length ? images.length : data.length;
    for (let a = 0; a < n; a++) {
      const html = this._getHtml(images, data, a);
      this._quotes.insertAdjacentHTML("afterbegin", html);
    }
  }
}
export default new StartView();
