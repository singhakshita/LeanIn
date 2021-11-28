export const state = {
  quote: [],
  images: [],
  author: [],
  genre: [],
};

const getJson = async function (url) {
  try {
    const data = await fetch(url);
    const jsonData = data.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const setQuote = async (url) => {
  const data = await getJson(url);
  console.log(data.data);
  data.data.forEach((elem) => {
    const quoteObject = {
      author: elem.quoteAuthor,
      text: elem.quoteText,
      genre: elem.quoteGenre,
    };
    state.quote.push(quoteObject);
  });
};
export const setImage = async (url) => {
  const data = await getJson(url);
  data.forEach((element) => {
    state.images.push(element.urls.regular);
  });
};
