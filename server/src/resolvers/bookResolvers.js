const Book = require("../models/book");

const bookResolvers = {
  Query: {
    books: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (err) {
        console.error("Error fetching books:", err);
        return [];
      }
    },
    book: async (_, { id }) => {
      try {
        const book = await Book.findById(id);
        return book;
      } catch (err) {
        console.error("Error fetching book:", err);
        return null;
      }
    },
  },
  Mutation: {
    addBook: async (_, { title, author, publishedYear }) => {
      try {
        const book = await Book.create({ title, author, publishedYear });
        return book;
      } catch (err) {
        console.error("Error adding book:", err);
        return null;
      }
    },
    updateBook: async (_, { id, title, author, publishedYear }) => {
      try {
        const book = await Book.findByIdAndUpdate(
          id,
          { title, author, publishedYear },
          { new: true }
        );
        return book;
      } catch (err) {
        console.error("Error updating book:", err);
        return null;
      }
    },
    deleteBook: async (_, { id }) => {
      try {
        const book = await Book.findByIdAndRemove(id);
        return book;
      } catch (err) {
        console.error("Error deleting book:", err);
        return null;
      }
    },
  },
};

module.exports = bookResolvers;
