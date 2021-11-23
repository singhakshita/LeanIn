// const promisifyLottery = new Promise(function (resolve, reject) {
//   const random = Math.random();
//   if (random > 0) {
//     resolve("The promise is reolved");
//   } else {
//     reject(new Error("The promise is rejected"));
//   }
// });
// promisifyLottery
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (err) => reject(err)
//     );
//   });
// };

// getLocation()
//   .then((res) => {
//     console.log(res);
//     return fetch("https://geocode.xyz/51.50354,-0.12768?geoit=json");
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// const lottery = new Promise(function (resolve, reject) {
//   if (Math.random() * 10 + 1 > 5) {
//     resolve("Congrats u won 🦋 🏅");
//   } else {
//     reject("Hey You lost 💩💩💩💩💩");
//   }
// });

// lottery.then((res) => console.log(res)).catch((err) => console.log(err));

// const getGeolocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getGeolocation()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const willRain = new Promise(function (resolve, reject) {
//   if (Math.random() * 10 > 5) {
//     resolve("hey it will rain");
//   } else {
//     reject("No rain");
//   }
// });

// willRain.then((res) => console.log(res)).catch((err) => console.log(err));

// // const resolved = (data) => {
// //   console.log(data);
// // };
// navigator.geolocation.getCurrentPosition(resolved, resolved);

//promisfying

const getPosition = async function () {
  return new Promise(function (resolved, reject) {
    navigator.geolocation.getCurrentPosition(resolved, reject);
  });
};

getPosition()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const getKeyWordData = async function () {
  return await Promise.all([
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=Eleanor&limit=1",
    ,
    "https://quote-garden.herokuapp.com/api/v3/quotes/",
  ]);
};
getKeyWordData().then((res) => console.log(res));
