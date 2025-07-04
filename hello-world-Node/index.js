console.log("Hello Node js")

const array = [1, 2, 3, 4, 5]

console.log(array)

// Node just skipped this code and moved further logged the second line
setTimeout(() => {
    console.log("This code is delayed by 2 seconds")
}, 2000) // this code is executed after two seconds

console.log("This is the last line of sync code!");
