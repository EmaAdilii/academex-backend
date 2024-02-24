const expressValidator = require('express-validator');
const { check } = expressValidator;

const createAboutUsValidator = () => {
  return [
    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('description')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a description'),

    check('icon')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an icon URL'),
  ];
};

const updateAboutUsValidator = () => {
  return [
    check('id')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an aboutUs Id'),

    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title'),

    check('description')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a description'),

    check('icon')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide an icon URL'),
  ];
};

module.exports = { createAboutUsValidator, updateAboutUsValidator };
