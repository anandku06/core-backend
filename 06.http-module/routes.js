const http = require("http");

const server = http.createServer((req, res) => {
  // req.url returns the current url
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "html" });
    res.end("<h1>Home Page</h1>");
  } else {
    res.writeHead(200, { "content-type": "html" });
    res.end("<h1 style='color : 'red''>Page Not found!!</h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is listening to port ", port);
});
