const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");

const getdb = require("../util.js/mogodb").getDb;
const filePath = path.join(
  path.dirname(process.mainModule.filename),
  "modal",
  "data",
  "products.json"
);

module.exports = class product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  saveInMongo() {
    let db = getdb();
    db.collection("Products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
  static fetchAll(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
  static fetchAllFromMongo() {
    let db = getdb();
    return db
      .collection("Products")
      .find()
      .toArray()
      .then((data) => {
        console.log("working");
        return data;
      })
      .catch((err) => console.log(err));
  }
};
