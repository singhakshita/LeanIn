const quotes = document.querySelector(".quotes");
const quote = document.querySelector(".quote");
const randomQuote = document.querySelector(".special__quote");
const search = document.querySelector(".search__input");

search.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const key = search.value;
    search.value = "";
  }
});
const getHtml = (data) => {
  const html = `<div class="quote">
  <div class="quote__text">${data.quoteText}</div>
  <div class="quote__data">${data.quoteAuthor}</div>
  <div class="quote__data">${data.quoteGenre}</div>
</div>`;
  return html;
};

const displayQuotes = (data) => {
  data.map((item) => {
    const html = getHtml(item);
    quotes.insertAdjacentHTML("afterbegin", html);
  });
};

const displayRandom = (data) => {
  console.log(data);
  randomQuote.textContent = data.quoteText;
};

const getJson = (url) => {
  return fetch(url).then((res) => res.json());
};

getJson(
  "https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1"
)
  .then((res) => {
    console.log(res);
    displayRandom(res.data[0]);
  })
  .catch((err) => console.log(err));

getJson("https://quote-garden.herokuapp.com/api/v3/quotes/")
  .then((res) => {
    console.log(res.data);
    displayQuotes(res.data);

    const author = res.data[0].quoteAuthor;
    return getJson(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
    );
  })
  .then((res) => {
    console.log(res);
    displayQuotes(res.data);
  })
  .catch((err) => console.log(err));
