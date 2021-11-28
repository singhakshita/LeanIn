import QuoteView from "./views/QuoteView";
import * as modal from "./modal";

async function setState() {
  await modal.setQuote("https://quote-garden.herokuapp.com/api/v3/quotes");
  await modal.setImage(
    "https://api.unsplash.com/photos/?client_id=Zf7YB9W9lM19EQ0FPkGLrOFQyTJPPk1Z5BVZSgs6nK0"
  );
  QuoteView.showData(modal.state.images, modal.state.quote);
}

const init = () => {
  setState();
};
init();

//https://quote-garden.herokuapp.com/api/v3/quotes?genre=age
//https://quote-garden.herokuapp.com/api/v3/authors
//https://quote-garden.herokuapp.com/api/v3/genres
