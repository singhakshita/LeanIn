const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    res.write("<html>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="text" /><button type="submit">send</button></form></body>'
    );

    res.write("</html>");
    return res.end();
  }
  if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      //   fs.writeFile("message",(message,err)=>{

      //   });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  //   res.write("<html>");
  //   res.write("<body><h1>Hello from Node</h1></body>");
  //   res.write("</html>");
  //   res.end();

  //process.exit();
};

module.exports = requestHandler;
