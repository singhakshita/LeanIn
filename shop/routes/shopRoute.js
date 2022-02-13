const express = require("express");
const router = express.Router();

const path = require("path");
const dirname = require("../util.js/path");
const Product = require("../modal/product");

router.post("/products", (req, res, next) => {
  const data = req.body;
  new Product(
    data.title,
    data.imageUrl,
    data.description,
    data.price
  ).saveInMongo();

  res.redirect("/products");
});
router.get("/products", (req, res, next) => {
  Product.fetchAllFromMongo()
    .then((arr) => {
      res.render("products", { title: "Products", products: arr });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
