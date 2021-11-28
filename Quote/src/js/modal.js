import * as helper from "./helperModal";
export const state = {
  quotes: [],
  images: [],
  authors: [],
  genres: [],
  searchData: [],
};

export const imagesState = async (url) => {
  const images = await helper.getJson(url);
  images.forEach((elem) => {
    state.images.push(elem.urls.regular);
  });
};

export const quoteState = async (url) => {
  const data = await helper.getJson(url);
  data.data.forEach((elem) => {
    const quoteObj = {
      author: elem.quoteAuthor,
      genre: elem.quoteGenre,
      text: elem.quoteText,
    };
    state.quotes.push(quoteObj);
  });
};

export async function searchHandler(params) {
  try {
    const authorData = await helper.getJson(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${params}`
    );
    console.log(authorData.data);
    authorData.data.forEach((elem) => {
      console.log(elem, "hi");
      console.log(helper.createObject(elem));
      state.searchData.push(helper.createObject(elem));
    });
  } catch (err) {
    const genreData = await helper.getJson(
      `https://quote-garden.herokuapp.com/api/v3/quotes?genre=${params}`
    );
    // genreData.data.forEach((elem) => {
    //   state.searchData.push(helper.createObject(elem));
    // });
  }
}

//Eleanor
