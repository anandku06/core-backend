// functions to be exported

function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    if (y === 0) {
        throw new Error("Divide by zero is not possible") // it'll be displayed in the catch block
    }
    
    return x / y
}

// exporting all the functions using this (CommonJS method)

module.exports = {
    add, subtract, multiply, divide
}