const express = require("express");
const router = express.Router();

const path = require("path");

const dirname = require("../util/path");

router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(dirname, "views", "admin.html"));
  //res.render("admin");
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
