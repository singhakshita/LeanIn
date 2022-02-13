const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mongodb = require("./util.js/mogodb");

const adminRoute = require("./routes/adminRoutes");
const shopRoute = require("./routes/shopRoute");
const app = express();
const server = http.createServer(app);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(shopRoute);
app.use(adminRoute);
app.use("/", (req, res) => {
  res.render("error", { title: "error 404" });
});
mongodb.mongoConnect((callback) => {
  console.log("conected");
  server.listen(3000);
});
