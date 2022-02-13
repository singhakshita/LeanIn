const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://Akshita:94%40Akshita@cluster0.nsnzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then((data) => {
      _db = data.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
