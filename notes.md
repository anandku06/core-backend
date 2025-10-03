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

## path module

- The path module in Node.js is a built-in module used for handling and transforming file and directory paths in a platform-independent way (i.e., works the same on Windows, Linux, macOS, etc.).
- provides utilities for working with files and directories paths

## file system

- allows you to interact with the file system to read, write, update, delete, and manipulate files and directories.

```javascript
const fs = require("fs"); // Callback & Sync API
const fsPromises = require("fs/promises"); // Promise-based API (preferred with async/await)
```

## http module

- The http module in Node.js is a built-in module that allows you to create an HTTP server and handle HTTP requests and responses.
- It's one of the core modules, meaning you don't need to install anything to use it—just require it in your script.

```javascript
// importing the module
const http = require("http");

// 🚀 Creating a Basic HTTP Server

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP Status OK
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n"); // Response body
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
```

- req (IncomingMessage): Contains details about the client's request (like URL, method, headers, etc.)
- res (ServerResponse): Used to construct and send back the HTTP response.

## callbacks

- functions that are passed to other functions as arguments
- defers an execution of a code until or unless a specific async operation completes
- commonly used in NodeJS

**Callback Hell** : when you have multiple nested callbacks that are executed one by one

```javascript

// example of a callback hell
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      ...
    })
  })
})

```

## Promises

- Promises in Node.js are a way to handle asynchronous operations, providing a cleaner alternative to callbacks for managing tasks like file operations, network requests, or database queries.
- They represent a value that may be available now, in the future, or never, with three states: pending, fulfilled, or rejected.
- **Promise Creation**: A Promise is created using the Promise constructor, which takes a function with resolve and reject parameters.
- _States_:
  - Pending: Initial state, neither fulfilled nor rejected.
  - Fulfilled: Operation completed successfully, with a result.
  - Rejected: Operation failed, with an error.
- _Methods_:
  - .then(): Handles fulfilled promises, receiving the resolved value.
  - .catch(): Handles rejected promises, receiving the error.
  - .finally(): Executes code regardless of the promise's outcome.
- **Chaining**: Promises can be chained with multiple .then() calls for sequential async operations.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulating an async operation
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((result) => console.log(result)) // Output: Operation successful!
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise completed"));
```

## Async/Await

- Syntactic sugar over promises, making async code look synchronous.
- Declared with the async keyword, these functions always return a Promise, even if the return value is not explicitly a Promise.
- **Await Keyword**: Used inside async functions to pause execution until a Promise resolves or rejects. It can only be used within an async function.
- handle asynchronous operations in a more readable, synchronous-like manner, avoiding the complexity of callback chains or nested .then() calls.

```javascript
async function fetchData() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data"), 1000)
  );
  return data;
}
fetchData().then((result) => console.log(result)); // Output: Data (after 1s)
```

## Event Emitter

- a class in the `events` module that allows objects to emit named events and register functions (listeners) to respond to those events

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit("greet", "Anand");
```

## ExpressJS

- web framework for NodeJS
- simplifies routing, middleware, and handling HTTP requests
- used to create RESTful APIs and full-stack web applications

```bash
# installing ExpressJS
npm i express
```

```javascript
// basic express server setup
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

- **Application Level Settings** : are configuration options that control how your Express application behaves.
  - They allow you to:
    - Configure your app to behave differently in development vs production
    - Enable/disable headers for security or privacy.
    - Set up template engines and other app-wide settings.
- **Middlewares** :
  - functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle.
  - The `next` middleware function is commonly denoted by a variable named `next`.
- **Express Router** : An Express Router is a special object that acts like a "mini-application" within your main Express app. Its primary purpose is to help you organize and group your application's routes into modular, manageable files.

## EJS

- Embedded JavaScript Templates
- a simple templating engine that lets you generate HTML markup with plain JS
- widely used in NodeJS with Express to render dynamic content in web applications.

```bash
# to install EJS
npm install ejs
```

```ejs
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Welcome, <%= user %>!</h1>
</body>
</html>

```

## REST API

- REpresentational State Transfer
- a way for different systems (like frontend and backend) to communicate over the internet using standard **HTTP methods** (GET, POST, PUT, DELETE, etc.)
- follows a stateless, resource-based architecture
- `express.json()` : a built-in middleware function in Express.js that parses incoming JSON payloads and makes the parsed data available under `req.body`.
- When a client (like Postman, frontend, or mobile app) sends a JSON payload in the body of an HTTP request (typically a POST, PUT, or PATCH request), the raw body needs to be parsed into a usable JavaScript object.
- Without express.json(), req.body would be undefined.

## MongoDB

- a **No-SQL Database** designed for high performance, high availability, and easy scalability.
- Instead of storing data in tables like traditional relational databases (like MySQL), MongoDB stores data in flexible, **JSON-like** documents.
- Needs an MongoDB String to connect with the database through NodeJS and it's stored inside the `.env` file.
- `.env` file is for some credentials that are private and should not be pushed on GitHub, like MongoDB string, API Keys, etc. we put these things in this file.

## bcryptjs

- a password hashing algorithm
- hashes the user's password before storing into DB
- uses a salt-generating algo to hash passwords more securely

```bash
npm i bcryptjs # installs the bcryptjs package

```

```javascript
const bcrypt = require("bcryptjs");

const salt = await bcrypt.genSalt(); // generates a salt(random-string) that is used in hashing the password, for more uniqueness
const hashedPass = await bcrypt.hash(password, salt); // generates the hashed password using the salt generated earlier
```

## Tokens

- a digital key string in your backend
- gives client the necessary info regarding the logged in user
- avoids the need of password entering at every route visit
- For **Auth**: if the user enters correct password and username, a **bearer token** is made to store the logged-in user info
- **Types of Tokens**
  1. Session Tokens : Old School method, server gives session id and stores in cookies
  2. JWT (JSON Web Tokens) : compact string, backend verifies then allows/denies request, having 3 parts -
  - Header
  - Payload
  - Signature
  3. OAuth Tokens - for third-party authentication like Github, Google, etc. ; Refresh Toekn + Access Token
  4. API Keys : Simple tokens for server-to-server communication

## JWT

- **JSON Web Tokens**
- an open, industry-standard method for securely transmitting information between two parties as a compact JSON object.
- Think of a JWT as a secure event wristband. 🎟️

- It’s issued by a trusted authority (the ticket counter/login server).

- It contains information about you (your access level, e.g., "VIP").

- It has a security feature (a unique hologram) that proves it's authentic and hasn't been faked.

- Security staff (the server's protected routes) can glance at your wristband to grant you access without needing to look you up in their main list every time.

### The Structure of a JWT

- A JWT consists of three parts separated by dots (.): the Header, the Payload, and the Signature.

`xxxxx.yyyyy.zzzzz (Header.Payload.Signature)`

1. Header
   The header typically consists of two parts: the token type (typ), which is JWT, and the signing algorithm (alg) being used, such as HMAC SHA256 (HS256) or RSA. This JSON is then Base64Url encoded to form the first part of the JWT.

Example JSON:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
// Encoded Result: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

2. Payload 📜

- The payload contains the claims, which are statements about an entity (typically the user) and additional data. The claims are the information you want to transmit securely.

- There are three types of claims:

1. Registered claims: Standardized claims like iss (issuer), exp (expiration time), and sub (subject/user ID). These are not mandatory but are recommended.

2. Public claims: These can be defined at will but should be named carefully to avoid collisions.

3. Private claims: Custom claims created to share information between parties that agree on using them.

- Crucially, the payload is only Base64Url encoded, not encrypted. This means anyone can decode it and read its contents. Therefore, you should never put sensitive information like passwords in the payload.

Example JSON:

```JSON
{
  "sub": "1234567890",
  "name": "Aarav Sharma",
  "role": "admin",
  "iat": 1516239022
}
// Encoded Result: eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFhcmF2IFNoYXJtYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0
```

3. Signature 🛡️

- The signature is used to verify the token's integrity. It ensures that the token hasn't been tampered with and, in the case of a private key, that it was sent by the intended issuer.

- To create the signature, you take:

1. The encoded header

2. The encoded payload

3. A secret key known only to the server

4. The algorithm specified in the header

5. The signature is created by signing the first two parts with the secret. For example, using the HS256 algorithm:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
)
```

- If a malicious user changes the header or payload, the signature will no longer match when the server re-calculates it, and the token will be rejected.

### How Does It Work?

- The authentication flow is straightforward:

1. Login: The user provides their credentials (e.g., email and password) to the server.

2. Verification: The server validates the credentials.

3. Token Creation: If the credentials are valid, the server creates a JWT by defining a header and payload, and then signs it using its private secret key.

4. Token Sent to Client: The server sends this JWT back to the client.

5. Client Storage: The client stores the JWT, typically in localStorage, sessionStorage, or a secure HttpOnly cookie.

6. Authenticated Requests: For every subsequent request to a protected route or resource, the client sends the JWT in the Authorization header using the Bearer schema.

`Authorization: Bearer <your-jwt-token>` 7. Server Verification: The server receives the token, reads the header to see which algorithm was used, and then uses its secret key to re-calculate the signature. It compares the new signature with the one on the token. If they match, the server trusts the token and processes the request. It will also typically check claims like the expiration date (exp).

## File uploading

- In express, using `multer` and `cloudinary` npm packages for it.
- Require you to first structure the schema for the file you want to be uploaded

### Multer

- a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files

## Pagination

- process of splitting a large amount of data into smaller, seperate chunks called "pages".
- Instead of sending thousands of records to a user all at once, you send a manageable amount, like 10 or 20, and provide a way to ask for the next chunk.

### How does it work?

- The entire process is a conversation between the **client** (frontend) and the **server** (backend).
- client makes a request to an API endpoint and includes two pieces of information in the URL, called **query parameters**:

1. `page`: which page number the user want to see.
2. `limit` or (`pageSize`): how many items should be on each page.

- Let's say a user wants to see the second page of products, with 10 products per page. The client would an API call like this:
  `GET https://api.example.com/products?page=2&limit=10`

- Now, here's how the server handles this request:

1. Recieve the request and extract the `page` and `limit` values from the query parameters.
2. Calculate the `offset`, which tells the server how many items to skip before starting to collect the items for the current page. The formula is:
   `offset = (page - 1) * limit`
3. Query the database to get the total number of items available. This helps the server know how many pages there are in total.
4. Fetch the specific items for the requested page using the `limit` and `offset`.
5. Send back a response to the client that includes:
   - The items for the current page.
   - Metadata like the current page number, total pages, total items, and items per page.

## Socket.IO

- a library that enables real-time, bidirectional, and event-based communication between web clients and servers.
- It allows you to build applications where the server can push updates to clients instantly, without the need for clients to continuously poll the server for new information.
- commonly used for chat applications, live notifications, real-time analytics, and collaborative tools.
- works on every platform, browser, or device, focusing equally on reliability and speed.
- built on top of WebSockets, but also provides fallbacks to other techniques like long polling for environments where WebSockets are not supported.

### How does it work?

1. **Establishing a Connection**: When a client (like a web browser) connects to a server using Socket.IO, it first establishes a WebSocket connection. If WebSockets are not supported, it falls back to other methods like long polling.
2. **Event-Driven Communication**: Both the client and server can emit and listen for events. This means that either side can send messages to the other side whenever they want, without waiting for a request.
3. **Namespaces**: Socket.IO supports namespaces, which allow you to create separate communication channels within the same connection. This is useful for organizing different parts of your application.
4. **Rooms**: Within namespaces, you can create rooms. Rooms are groups of sockets that can be used to broadcast messages to multiple clients at once. For example, in a chat application, each chat room can be a separate room.
5. **Broadcasting**: You can send messages to all connected clients, to specific rooms, or to individual clients. This flexibility allows for a wide range of real-time communication patterns.

### Example

```javascript
// Server-side (Node.js with Express)
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

// this event is fired when a client connects to the server
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for a custom event from the client
  socket.on("chat message", (msg) => {
    console.log("Message received: " + msg);
    // Broadcast the message to all connected clients
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

```html
<!-- Client-side (HTML + JavaScript) -->
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO Chat</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io(); // Connect to the server

      // Listen for chat messages from the server
      socket.on("chat message", (msg) => {
        const item = document.createElement("li");
        item.textContent = msg;
        document.getElementById("messages").appendChild(item);
      });

      // Send a chat message to the server
      function sendMessage() {
        const input = document.getElementById("messageInput");
        const msg = input.value;
        socket.emit("chat message", msg);
        input.value = "";
      }
    </script>
  </head>
  <body>
    <ul id="messages"></ul>
    <input
      id="messageInput"
      type="text"
      placeholder="Type your message here..."
    />
    <button onclick="sendMessage()">Send</button>
  </body>
</html>
```

## Deployment Strategies

- Deployment is the process of making your web application available to users on the internet.
- involves transferring your application code, along with its dependencies and configurations, to a web server or cloud platform where it can be accessed by users.

### Common Deployment Strategies

1. **Manual Deployment**: This involves manually uploading your application files to a server using FTP/SFTP or SSH. While straightforward, it can be error-prone and time-consuming for larger applications.
2. **Automated Deployment**: Using tools like CI/CD pipelines (e.g., GitHub Actions, Jenkins, Travis CI) to automate the deployment process. This ensures that every time you push code to your repository, it gets automatically tested and deployed to your server.
3. **Containerization**: Using Docker to package your application and its dependencies into a container. This makes it easy to deploy and run your application consistently across different environments.
4. **Platform-as-a-Service (PaaS)**: Using cloud platforms like Heroku, Vercel, or Netlify that handle the infrastructure for you. You simply push your code, and the platform takes care of the rest.
5. **Infrastructure-as-a-Service (IaaS)**: Using services like AWS, Azure, or Google Cloud to set up and manage your own servers. This gives you more control but requires more management.

### Steps for Deployment

1. **Prepare Your Application**: Ensure your application is production-ready. This may involve optimizing code, setting environment variables, and configuring databases.
2. **Choose a Hosting Provider**: Select a hosting provider based on your needs (e.g., traffic, scalability, budget).
3. **Set Up the Server**: Configure your server environment, including installing necessary software (e.g., Node.js, databases).
4. **Transfer Files**: Upload your application files to the server using your chosen deployment method.
5. **Install Dependencies**: Run commands to install your application's dependencies (e.g., `npm install`).
6. **Start the Application**: Use a process manager like PM2 to run your application in the background and ensure it restarts if it crashes.
7. **Configure Domain and SSL**: Set up your domain name and secure your application with SSL certificates.
8. **Monitor and Maintain**: Regularly monitor your application for performance and errors, and update it as needed.

### Example: Deploying a Node.js App to Heroku

1. **Install the Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) from the [Heroku website](https://devcenter.heroku.com/articles/heroku-cli).
2. **Login to Heroku**: Open your terminal and log in to your Heroku account using:
   ```bash
   heroku login
   ```
3. **Create a New Heroku App**: Navigate to your project directory and create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```
4. **Add a Procfile**: Create a file named `Procfile` in the root of your project with the following content:

   ```web: node index.js

   ```

5. **Commit Your Changes**: Make sure all your changes are committed to Git:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   ```
6. **Push to Heroku**: Deploy your application by pushing your code to the Heroku remote:
   ```bash
   git push heroku main
   ```
7. **Open Your App**: Once the deployment is complete, you can open your app in the browser:
   ```bash
   heroku open
   ```
8. **Monitor Logs**: You can view your app's logs to monitor its performance and debug any issues:
   ```bash
   heroku logs --tail
   ```
