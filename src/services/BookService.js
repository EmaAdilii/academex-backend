const Book = require('../models/bookModel');

class BookService {
  async getAllBooks() {
    return await Book.findAll();
  }

  async getBookById(id) {
    return await Book.findByPk(id);
  }

  async createBook(bookData) {
    try {
      const newBook = await Book.create(bookData);
      return newBook;
    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  }

  async updateBook(updateBookData) {
    try {
      const book = await Book.findByPk(updateBookData.bookId);
      if (!book) {
        return 'Book not found';
      }

      await book.update(updateBookData);

      return book;
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  }

  async deleteBook(id) {
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return 'Book not found';
      }

      await book.destroy();
      return 'Book deleted successfully!';
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
}

module.exports = new BookService();
