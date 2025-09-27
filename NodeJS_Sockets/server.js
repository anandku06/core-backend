const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const users = new Set();

// initialize socket.io with the server
const io = socketIo(server);

// Serve static files from the "public" directory, bcz we want to serve the client-side code
app.use(express.static("public"));

// handle users when they connect
// on method is used to listen for incoming connections from clients, and the callback function is executed when a new client connects
socketIo.on("join", (userName) => {
    users.add(userName);

    // broadcast to all users that a new user has joined
    socketIo.emit("user-joined", userName);
    // emit method is used to send messages to all connected clients

    // send the updated list of active users to all clients
    socketIo.emit("active-users", Array.from(users));
})


// handle incoming chat messages

// handle user disconnections
