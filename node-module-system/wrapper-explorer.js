console.log("Node module wrapper demo");

console.log("__filename", __filename); // returns the current script filename
console.log("__dirname", __dirname); // returns the current dirname of the script

module.exports.greet = function (name) {
  console.log(`Hello, ${name}`);
};
