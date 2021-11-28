import Parent from "./Parent";

class RandomQuoteView extends Parent {
  _randomQuoteConatiner = document.querySelector(".special__quote__text");

  setRandom(data) {
    const idx = Math.ceil(Math.random() * 10) - 1;

    this.clearParent(this._randomQuoteConatiner);
    this._randomQuoteConatiner.textContent = data[idx].text;
  }
}
export default new RandomQuoteView();
