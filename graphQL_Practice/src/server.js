require("dotenv").config();
const { ApolloServer } = require("@apollo/server"); // to create the Apollo Server
const { startStandaloneServer } = require("@apollo/server/standalone"); // to run the server standalone
const typeDefs = require("./graphql/schema.js");
const connectDB = require("./database/db.js")
const resolvers = require("./graphql/resolvers.js");

async function startServer() {
  await connectDB(); // connect to the database

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  }); // create an instance of ApolloServer with the schema and resolvers

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });

  console.log(`Server running at ${url}`);
}

startServer(); // entry point of the application
// sets up and starts the Apollo Server
