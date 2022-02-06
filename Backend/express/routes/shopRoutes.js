const express = require("express");
const router = express.Router();

const path = require("path");

const dirname = require("../util/path");

router.get("/products", (req, res, next) => {
  res.sendFile(path.join(dirname, "views", "shop.html"));
});

module.exports = router;
