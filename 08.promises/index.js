function delayFn(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

console.log("Promise lecture starts");
delayFn(2000).then(() => console.log("after 2 seconds promise resolved"));
console.log("end");

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can't divide by zero!");
    } else {
      resolve(num1 / num2);
    }
  });
}

divide(10, 0)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.error(err));
