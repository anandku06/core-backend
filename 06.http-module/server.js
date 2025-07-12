const http = require("http");

// Returns a new instance of Server.
const server = http.createServer((req, res) => {
//   console.log("Request", req);
  res.writeHead(200, {
    "content-type": "text/plain",
  }); // Sends a response header to the request

  res.end("Hello nodejs from http module")
});

// Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
