class QuoteView {
  _quotes = document.querySelector(".main__body-quotes");

  _randomQuote = document.querySelector(".special__quote__text");
  _search = document.querySelector(".search__input");

  searchData() {
    this._search.addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        const key = this._search.value;
        this._search.value = "";
        console.log("hey I was Clicked");
      }
    });
  }
  _getHtml(images, quote, idx) {
    const className = idx % 2 == 0 ? "" : "odd";
    const html = `<div class="main__body-quote ${className}">
    <img
      src="${images[idx]}"
      class="main__body-quote__img"
      alt="${quote[idx].author}"
    />
    <div class="main__body-quote__data">
            <div class="main__body-quote__data-genre">${quote[
              idx
            ].genre.toUpperCase()}</div>
            <div class="main__body-quote__data-text">${quote[idx].text}</div>
            <div class="main__body-quote__data-author">${
              quote[idx].author
            }</div>
    </div>
  </div>`;
    return html;
  }
  showData(images, quotes) {
    const n = images.length < quotes.length ? images.length : quotes.length;
    for (let a = 0; a < n; a++) {
      const html = this._getHtml(images, quotes, a);
      this._quotes.insertAdjacentHTML("afterbegin", html);
    }
  }
}
export default new QuoteView();
