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

## Node Package Manager

- default package manager for NodeJs
- helps to use any third-party packages in the code
- manage your projects, dependencies, run scripts defined in package.json file

- **package.json** - heart of any Nodejs project - contains meta-data about your project - manages dependencies, dev-dependencies, scripts and project info
- use `npm init` (detaisl to be filled manually) or `npm init -y` (details filled automatically)
- example of a `package.json` file

```json
{
  "name": "03.node-package-manager",
  "version": "1.0.0",
  "description": "node package manager",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "anand kumar",
  "license": "ISC"
}
```

- **dependencies and dev-dependencies** : dependencies are all the packages required to run the project in production ; dev-dependencies are only needed for local developement and testing purposes
```bash
# for package installation
npm install <package_name>
npm i <package_name>

# package name should be genuine,
# multiple packages can be given as well but each seperated with commas, 
npm i <package1> <package2> <package3>
# after installation, the package name with its version, is recorded in the `package.json` and `package-lock.json` files

npm uninstall <package_name> # to uninstall any package

npm update # to update any package

npm run <script_name> # to run any scripts define in package.json file

```