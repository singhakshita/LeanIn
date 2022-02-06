const http = require("http"); // node package
const path = require("path");

const express = require("express"); // third party lib

const app = express(); // valid request handler

app.use((req, res, next) => {
  console.log("hello");
  next();
});
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
  next();
});
app.use((req, res, next) => {
  console.log("i ll not print");
});

const server = http.createServer(app);

server.listen(3000);
