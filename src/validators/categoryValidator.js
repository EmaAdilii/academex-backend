const expressValidator = require('express-validator');
const { check } = expressValidator;

const createCategoryValidator = () => {
  return [
    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title')
      .isLength({ max: 15 })
      .withMessage('Title should be max 15 characters'),

    check('cover')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a cover image URL'),

    // check('description')
    //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage('Please provide a description')
    //   .isLength({ max: 300 })
    //   .withMessage('Description should be max 300 characters'),
  ];
};

const updateCategoryValidator = () => {
  return [
    check('id')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a category Id'),

    check('title')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a title')
      .isLength({ max: 15 })
      .withMessage('Title should be max 15 characters'),

    check('cover')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a cover image URL'),

    // check('description')
    // //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage('Please provide a description')
    //   .isLength({ max: 300 })
    //   .withMessage('Description should be max 300 characters'),
  ];
};

module.exports = { createCategoryValidator, updateCategoryValidator };
