const http = require("http");
const fs = require("fs");

//creating a server with http module
const myServer = http.createServer((req, res) => {
  //basic routing for different urls
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //setting redirects for old non-existent pages
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "notfound.html";
      res.statusCode = 404;
      break;
  }

  //set Header for response
  res.setHeader("Content-Type", "text/html");

  //send an HTML file by reading local files in views folder
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.end(data);
    }
  });
});

//set the server to listen on a particular port
myServer.listen("3000", "localhost", () => {
  console.log("Server is now running on port 3000");
});
