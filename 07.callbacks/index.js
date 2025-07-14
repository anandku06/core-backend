const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello, ${name}`);
  callbackFn();
}

function address() {
  console.log("India");
}

person("Anand Kumar", address); // a function given as a parameter so, its a callback function

// example of a callback function used in making of a new file using fs.readFile() method
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }

  console.log(data);
});
