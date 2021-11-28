import Parent from "./Parent";
class SearchView extends Parent {
  _searchBox = document.querySelector(".search__input");

  onSearchHandler(handler) {
    this._searchBox.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        const params = this._searchBox.value;
        handler(params);
      }
    });
  }
}

export default new SearchView();
