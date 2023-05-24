const { gql } = require("apollo-server-express");

const bookSchema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedYear: Int!): Book
    updateBook(id: ID!, title: String, author: String, publishedYear: Int): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = bookSchema;
