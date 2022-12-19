const fs = require("fs");
const csv = require("csvtojson");
const readStream = fs.createReadStream("./assets/nodejs-hw1-ex1.csv");
const ws = fs.createWriteStream("./books-task3.txt", "utf-8");

readStream
  .pipe(
    csv({
      noheader: true,
      headers: ["book", "author", "units", "price"],
    })
  )
  .pipe(ws)
  .on("error", (error) => {
    console.log(error);
  });
