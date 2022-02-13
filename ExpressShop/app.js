const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const productRoute = require("./Routes/products");
const adminRoutes = require("./Routes/admin");

const mongodb = require("./util/mongodb");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(productRoute);
app.use(adminRoutes);
app.use((req, res) => {
  res.render(path.join(__dirname, "views", "error.ejs"), {
    title: "error 404",
  });
});
// mongodb.mongoConnect(() => {
//   console.log("connected");
//   app.listen(3000);
// });
mongodb.mongoConnect((callback) => {
  console.log("i m running");
  app.listen(3000);
});
