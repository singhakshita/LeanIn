//Ajax asynchronous javascript and xml
//"https://foodish-api.herokuapp.com/api/images/pizza");

//"https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1"
//callback;

// const request = new XMLHttpRequest();
// request.open(
//   "GET",
//   "https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1"
// );
// request.send();
// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   const author = data.data[0].quoteAuthor;
//   const request2 = new XMLHttpRequest();
//   request2.open(
//     "GET",
//     `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
//   );
//   request2.send();
//   request2.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   });
// });

// setTimeout(()=> setTimeout(()=>{
//     console.log("first");

// }),3000)

//fetch api
//return promise

const getJson = (url) => {
  return fetch(url).then((res) => res.json());
};

getJson(
  "https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1"
).then((res) => console.log(res));
