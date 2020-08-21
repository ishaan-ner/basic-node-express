const fs = require("fs");

//reading files (asynchronous)
fs.readFile("./docs/blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

// //write files
fs.writeFile("./docs/blog2.txt", "Hello world", () => {
  console.log("Overwrite successful");
});

// //directories
fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Created");
});

//reading streams for large files.
const readStream = fs.createReadStream("./docs/largeblog.txt", {
  encoding: "utf8",
});

readStream.on("data", (chunk) => {
  console.log("------NEW CHUNK ARRIVED-----");
  console.log(chunk);
});
