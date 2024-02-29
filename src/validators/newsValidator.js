const expressValidator = require('express-validator');
const { check } = expressValidator;

const createNewsValidator = () => {
  return [
    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('content')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide content'),

    check('imageUrl')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an image URL'),

  ];
};

const updateNewsValidator = () => {
  return [
    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('content')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide content'),

    check('imageUrl')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an image URL'),

  ];
};

module.exports = { createNewsValidator, updateNewsValidator };