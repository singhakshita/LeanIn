// const getJson = (url) => {
//   return fetch(url).then((res) => res.json());
// };

// getJson(
//   "https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1"
// )
//   .then((res) => {
//     console.log(res);
//     displayRandom(res.data[0]);
//   })
//   .catch((err) => console.log(err));

// getJson("https://quote-garden.herokuapp.com/api/v3/quotes/")
//   .then((res) => {
//     console.log(res.data);
//     displayQuotes(res.data);

//     const author = res.data[0].quoteAuthor;
//     return getJson(
//       `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
//     );
//   })
//   .then((res) => {
//     console.log(res);
//     displayQuotes(res.data);
//   })
//   .catch((err) => console.log(err));

// const getQuote = await fetch(
//   "https://quote-garden.herokuapp.com/api/v3/quotes/"
// );
// const getQuoteJson = await getQuote.json();
// console.log(getQuoteJson);

// const getJson = async function (url) {
//   const data = await fetch(url);
//   const jsonData = await data.json();
//   return jsonData;
// };
// getJson("https://quote-garden.herokuapp.com/api/v3/quotes/").then((res) => {
//   console.log(res.data);
//   displayQuotes(res.data);
//   displayRandom(res.data[0]);
// });

// const raceAll = async function () {
//   const res = await Promise.race([
//     getJson("https://quote-garden.herokuapp.com/api/v3/quotes/"),
//     getJson("https://quote-garden.herokuapp.com/api/v3/quotes/"),
//   ]);
//   console.log(res);
// };
// raceAll();

// fetch('url').then(res => res.json()).then(data => console.log(data));

// every async function returns a promise

const getJson = async function (url) {
  const data = await fetch(url);
  const jsonData = data.json();
  return jsonData;
};

getJson("https://quote-garden.herokuapp.com/api/v3/quotes/").then((res) => {
  displayQuotes(res.data);
  displayRandom(res.data[0]);
});
