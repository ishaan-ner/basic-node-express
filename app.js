const express = require("express");

//express app
const app = express();

//listen for requests
app.listen(3000);

//basic routing for get requests
app.get("/", (req, res) => {
  res.sendFile("/views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("/views/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.status(404).sendFile("/views/notfound.html", { root: __dirname });
});
