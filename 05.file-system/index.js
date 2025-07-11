const fs = require("fs") // fs is the module name for file system
const path = require("path")

const dataFolder = path.join(__dirname, "data")

// Returns true if the path exists, false otherwise.
if (!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder) // Synchronous mkdir(2) - create a directory
    console.log("Folder created")
}

const filePath = path.join(dataFolder, "example.txt")
// synchronous way of creating the file
fs.writeFileSync(filePath, "Hello from nodeJs") // takes the filepath and the data to be written inside the file

const readFile = fs.readFileSync(filePath, 'utf-8') // Synchronously reads the entire contents of a file.
console.log("File contents: ", readFile)

fs.appendFileSync(filePath, "\nAppending more text in the file")

// Async way of creating file

// When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.
const asyncFilePath = path.join(dataFolder, "async-example.txt")
fs.writeFile(asyncFilePath, "Hello async node js", (err) => {
    if (err) throw err;

    console.log("Async file is created successfully!")

    // Asynchronously reads the entire contents of a file.
    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) throw new Error(err);

        console.log("Async file content: ", data)

        fs.appendFile(asyncFilePath, "\nThis line is appended", err => {
            if (err) throw new Error(err);

            console.log("Line appended!")
        })
    })
}) 