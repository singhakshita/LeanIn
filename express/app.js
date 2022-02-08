const http = require("http");
const path = require("path");

const express = require("express");
const parser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));
app.use(parser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("error", { pagetitle: "Error 404" });
});

const server = http.createServer(app);

server.listen(3000);
