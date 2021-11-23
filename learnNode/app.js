const express = require("express");
const http = require("http");

const app = express();

app.use("/product", (req, res, next) => {
  console.log("in the other route");
  res.send("<h1>on shop PAge</h1>");
});

app.use("/", (request, response, next) => {
  // path filter  :filters all path that starts with /
  console.log("hi");
  response.send("<h1>Hi</h1>");
});

const server = http.createServer(app); // app is request listner;
server.listen(3000);

//npm install --save-dev nodemon
