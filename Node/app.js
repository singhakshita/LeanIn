const http = require("http"); // global module import

const routes = require("./routes/mainRoute");

// const handler = function (request, response) {
//   console.log(request.url, request.header, request.method);
// };
const server = http.createServer(routes);

//console.log(req.url, req.header, req.method);
//   res.write("<html>");
//   res.write("<body><h1>Hi from Node</h1></body>");
//   res.write("</html>");
//   res.end();

server.listen(3000); // listen is an event listner
