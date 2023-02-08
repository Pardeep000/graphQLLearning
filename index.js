const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
//
const { connectMongo } = require("./db");
//
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
//
let server = null;
async function startServer() {
  server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();
//
connectMongo();
//
app.listen(port, (err) => {
  if (!err) {
    console.log("server is listening at ", port);
    console.log("connect to graphql IDE: ", server.graphqlPath);
    return null;
  }
  console.log("error connections...");
});
