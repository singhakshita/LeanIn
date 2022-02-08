const express = require("express");

const path = require("path");

const dirname = require("../utils/path");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  //console.log(__dirname); // directory name of the file in which u execute the code
  console.log("hello");
  //res.sendFile(path.join(dirname, "views", "admin.html"));
  res.render("admin", { pageTitle: "Book Shop" });
});

module.exports = router;
