// module.exports -> exports functionality

// require -> imports the exported functionality

// using require method takes the path of the module to be imported
const firstModule = require("./first-module")

// now to access we use dot (.)

console.log(firstModule) // objects containing the exports
console.log(firstModule.add(23, 45));
console.log(firstModule.subtract(23, 45));
console.log(firstModule.multiply(23, 45));
console.log(firstModule.divide(23, 45));


try {
    console.log("Dividing by 0!")
    let result = firstModule.divide(100, 0)

    console.log(result)
} catch (error) {
    console.log("Caught an error", error.message) // error.message displays the message given in the Error constructor
}