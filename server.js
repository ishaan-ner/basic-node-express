const http = require("http");

//creating a server with http module
const myServer = http.createServer((req, res) => {
  console.log("request made");
});

//making the server run on localhost port 3001
myServer.listen("3001", "localhost", () => {
  console.log("Server listening on port 3001");
});
