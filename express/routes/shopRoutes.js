const express = require("express");
const router = express.Router();
const path = require("path");

const dirname = require("../utils/path");

router.use("/products", (req, res, next) => {
  console.log(req.body);
  res.render("shop", { pageTitle: "Products", product: req.body.title });
});

module.exports = router;
