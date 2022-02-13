const express = require("express");
const router = express.Router();
const path = require("path");
const dirname = require("../util.js/path");

router.get("/addproducts", (req, res, next) => {
  res.render("admin", { title: "add - product" });
});

module.exports = router;
