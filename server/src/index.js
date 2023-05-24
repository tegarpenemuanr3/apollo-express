const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const bookSchema = require("./schemas/bookSchema");
const bookResolvers = require("./resolvers/bookResolvers");

// Set up MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/book", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Create an instance of ApolloServer
    const server = new ApolloServer({
      typeDefs: bookSchema,
      resolvers: bookResolvers,
    });

    // Create an Express application
    const app = express();

    // Connect ApolloServer with Express
    server.start().then(() => {
      server.applyMiddleware({ app });
      // Start the server
      const PORT = 3000;
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
      });
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
