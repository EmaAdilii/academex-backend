const expressValidator = require('express-validator');
const { check } = expressValidator;

const createBookValidator = () => {
  return [
    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('author')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an author'),

    check('image')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an image URL'),

  ];
};

const updateBookValidator = () => {
  return [
    check('id')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a book Id'),

    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('author')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an author'),

    check('image')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an image URL'),

  ];
};

module.exports = { createBookValidator, updateBookValidator };
