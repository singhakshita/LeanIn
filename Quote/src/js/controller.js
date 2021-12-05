import * as modal from "./modal";
import StartView from "./views/StartView";
import RandomView from "./views/RandomQuoteView";
import SearchView from "./views/SearchView";
import SidePalleteViews from "./views/SidePlatteViews";

async function getQuoteData() {
  await modal.imagesState(
    "https://api.unsplash.com/photos/?client_id=Zf7YB9W9lM19EQ0FPkGLrOFQyTJPPk1Z5BVZSgs6nK0"
  );
  await modal.quoteState("https://quote-garden.herokuapp.com/api/v3/quotes/");
  await modal.fetchAuthorsName(
    "https://quote-garden.herokuapp.com/api/v3/authors/"
  );
  await modal.fetchGenresName(
    "https://quote-garden.herokuapp.com/api/v3/genres/"
  );
  StartView.setStartPage(modal.state.images, modal.state.quotes);
  RandomView.setRandom(modal.state.quotes);

  SidePalleteViews.displayData(modal.state.genres, 1);
}

const searchHandler = (params) => {
  getSearchData(params);
  console.log(params);
};
const getSearchData = async (param) => {
  await modal.fetchSearchData(param);
  StartView.setStartPage(modal.state.images, modal.state.searchData);
};

const sidePalletClickhandler = async (type, id) => {
  await modal.fetchDataOnClick(type, id);
  StartView.setStartPage(modal.state.images, modal.state.quotes);
};
//https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1
//https://api.unsplash.com/photos/?client_id=Zf7YB9W9lM19EQ0FPkGLrOFQyTJPPk1Z5BVZSgs6nK0

function init() {
  getQuoteData();
  SearchView.onSearchHandler(searchHandler);
  SidePalleteViews.clickHandler(sidePalletClickhandler);
}
init();
