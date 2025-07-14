function delayedFn(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

// executes this function synchrnously
async function delayedGreet(name) {
    await delayedFn(2000) // await for this promise to be resolved, then execute further
    console.log(name)
}

delayedGreet("Anand")

// error handling in async functions
async function division(num1, num2) {
    try {
        if (num2 === 0) throw new Error("Can't divide by zero!!");
        return num1 / num2
    } catch (error) {
        console.error("Error:", error)
        return null
    }
}

async function mainFn() {
    console.log(await division(10, 5))
    console.log(await division(10, 0))
}


mainFn()