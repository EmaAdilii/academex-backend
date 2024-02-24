const BookService = require('../services/BookService');

class BookController {

  async getAllBooks(req, res) {
    try {
      const books = await BookService.getAllBooks();
      res.json(books);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET ALL BOOKS controller');
    }
  }

  async getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await BookService.getBookById(id);
      res.json(book);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - GET BOOK BY ID controller');
    }
  }

  async createBook(req, res) {
    try {
      const result = await BookService.createBook(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - CREATE BOOK controller');
    }
  }

  async updateBook(req, res) {
    try {
      const result = await BookService.updateBook(req.body);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - UPDATE BOOK controller');
    }
  }

  async deleteBook(req, res) {
    try {
      const id = req.params.id;
      const result = await BookService.deleteBook(id);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error - DELETE BOOK controller');
    }
  }
}

module.exports = new BookController();
