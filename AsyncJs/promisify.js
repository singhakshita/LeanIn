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

const getLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
  });
};

getLocation()
  .then((res) => {
    console.log(res);
    return fetch("https://geocode.xyz/51.50354,-0.12768?geoit=json");
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
