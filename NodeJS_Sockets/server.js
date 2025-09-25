const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

// initialize socket.io with the server
const io = socketIo(server);

// Serve static files from the "public" directory, bcz we want to serve the client-side code
app.use(express.static('public'));