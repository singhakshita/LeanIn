const http = require("http");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express(); // app is a function that is a valid request handler;
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);
server.listen(3000);
