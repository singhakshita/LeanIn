const express = require("express");
const router = express.Router();

router.get("/addproducts", (req, res) => {
  res.render("admin", { title: "add- product" });
});

module.exports = router;
