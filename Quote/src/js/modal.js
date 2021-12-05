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
export const fetchSearchData = async (params) => {
  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${params}`;
  const data = await helper.getJson(url);
  data.data.forEach((elem) => {
    const obj = helper.createObject(elem);
    state.searchData.push(obj);
  });
};

export const fetchAuthorsName = async (url) => {
  const data = await helper.getJson(url);
  for (let a = 1; a <= 20; a++) {
    state.authors.push(data.data[a]);
  }
};
export const fetchGenresName = async (url) => {
  const data = await helper.getJson(url);

  for (let a = 1; a <= 20; a++) {
    state.genres.push(data.data[a]);
  }
};

export const fetchDataOnClick = async (type, id) => {
  let url;
  if (type == 0) {
    url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${id}`;
  } else {
    url = `https://quote-garden.herokuapp.com/api/v3/quotes?genre=${id}`;
  }

  const data = await helper.getJson(url);
  state.quotes = [];
  data.data.forEach((elem) => {
    const obj = helper.createObject(elem);
    state.quotes.push(obj);
  });
};
