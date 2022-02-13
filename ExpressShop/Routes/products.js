const express = require("express");
const router = express.Router();

const Products = require("../modal/products");

router.get("/products", (req, res) => {
  //res.render("products", { title: "Products", products: [] });
  Products.find((data) => {
    console.log(data);
    res.render("products", { title: "Products", products: data });
  });
});
router.post("/products", (req, res) => {
  const data = req.body;
  new Products(data.title, data.imageUrl, data.description, data.price).save();
  res.redirect("/products");
});

module.exports = router;
