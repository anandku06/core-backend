const path = require("path")
const { resolve } = require("path/posix")

console.log("Directory name: ", path.dirname(__filename)) // Return the directory name of a path

console.log("File name: ", path.basename(__filename)) // Return the last portion of a path

console.log("File extension: ", path.extname(__filename)) // Return the extension of the path, from the last '.' to end of string in the last portion of the path

const joinedPath = path.join("/user", "document", "node", "projects") // join all arguments together and normalize the resulting path.
console.log("Joined path: ", joinedPath)

const resolvePath = path.resolve("user", "document", "node", "projects") // Resolves a sequence of paths into an absolute path.
console.log("Resolved path: ", resolvePath)

const normalPath = path.normalize("/user/.././document/node/../projects") // Normalize a string path, reducing '..' and '.' parts. 
console.log("Normal path: ", normalPath)