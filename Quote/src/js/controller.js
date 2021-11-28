import * as modal from "./modal";
import StartView from "./views/StartView";
import RandomView from "./views/RandomQuoteView";
import SearchView from "./views/SearchView";

async function getQuoteData() {
  await modal.imagesState(
    "https://api.unsplash.com/photos/?client_id=Zf7YB9W9lM19EQ0FPkGLrOFQyTJPPk1Z5BVZSgs6nK0"
  );
  await modal.quoteState("https://quote-garden.herokuapp.com/api/v3/quotes/");
  StartView.setStartPage(modal.state.images, modal.state.quotes);
  RandomView.setRandom(modal.state.quotes);
}

const searchHandler = (params) => {
  setSearchData(params);
};

const setSearchData = async (params) => {
  await modal.searchHandler(params);
  console.log(modal.state.searchData);
};

//https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1
//https://api.unsplash.com/photos/?client_id=Zf7YB9W9lM19EQ0FPkGLrOFQyTJPPk1Z5BVZSgs6nK0

function init() {
  getQuoteData();
  SearchView.onSearchHandler(searchHandler);
}
init();
