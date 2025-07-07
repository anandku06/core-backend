const lodash = require("lodash")

const names = ["anand", "lolu", "mariyam", "elon"]
const capitals = lodash.map(names, lodash.capitalize)

console.log(capitals)

// making a script in package.json file to run this script