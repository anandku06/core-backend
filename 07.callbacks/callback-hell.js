const fs = require("fs");


// this is a better example of a callback hell
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const modifiedData = data.toUpperCase();

  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) {
      console.error("Error reading file", err);
      return;
    }

    console.log("data written to the new file")

    fs.readFile('output.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error("Error reading file: ", err)
      }

      console.log(data)
    })
  });
});
