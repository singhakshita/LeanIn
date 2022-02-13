const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const mongo = require("../util/mongodb");

module.exports = class Products {
  constructor(title, url, des, price) {
    this.title = title;
    this.imageUrl = url;
    this.description = des;
    this.price = price;
  }
  save() {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "modal",
      "Data",
      "products.json"
    );
    let products = [];
    fs.readFile(filePath, (err, content) => {
      if (!err) {
        products = JSON.parse(content);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static find(callback) {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "modal",
      "Data",
      "products.json"
    );
    fs.readFile(filePath, (err, content) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(content));
      }
    });
  }
};
