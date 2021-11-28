export const getJson = async function (url) {
  const data = await fetch(url);
  const jsonData = data.json();

  return jsonData;
};

export const createObject = () => {
  const quoteObj = {
    author: elem.quoteAuthor,
    genre: elem.quoteGenre,
    text: elem.quoteText,
  };
  return quoteObj;
};
