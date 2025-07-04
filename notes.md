# Backend Developement in JavaScript

## Why index.js name?

- bcz in a folder, when a proper name is given, then no need of giving the file's name to be same again
- node detects the index.js file as the main or root file for execution
- to execute the file , we use : `node fileName.js`

## Node Module System

- allows to organise your code into multiple reusable pieces of code
- a large codebase divided into multiple small codebases that are organised in a root file and then run to get the desired result
- uses CommonJs module system ; require method is used for importing the module and module.exports(object) is used to export the module

## Module Wrapper function

- refers to the outer function that wraps the code in a module to create a private scope.

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Your module code actually lives here
});
```

- So if you write this in a file example.js:

```javascript
console.log("Hello from module!");

// Node.js actually wraps it under the hood like this:
(function (exports, require, module, __filename, __dirname) {
  console.log("Hello from module!");
});
```
