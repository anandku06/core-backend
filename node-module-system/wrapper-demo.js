
const wrapperExplorer = require("./wrapper-explorer") // because we imported the other file so its logs are also displayed 

console.log("in wrapper-demo file")

console.log("__filename: ", __filename)
console.log("__dirname: ", __dirname)

wrapperExplorer.greet("Anand")