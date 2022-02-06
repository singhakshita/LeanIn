const fs = require("fs");
const handler = function (req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="text" /><button type="submit">send</button></form></body>'
    );
    return res.end();
  }
  if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      let msg = Buffer.concat(body).toString();
      console.log(msg);
      msg = msg.split("=")[1];
      fs.writeFileSync("message.txt", msg);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = handler;
