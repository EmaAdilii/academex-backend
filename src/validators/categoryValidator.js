const expressValidator = require('express-validator');
const { check } = expressValidator;

const createCategoryValidator = () => {
  return [
    check('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a name for the category')
      .isLength({ max: 60 })
      .withMessage('Category name should be max 60 characters'),
  ];
};

const updateCategoryValidator = () => {
  return [
    check('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Please provide a name for the category')
      .isLength({ max: 60 })
      .withMessage('Category name should be max 60 characters'),
  ];
};

module.exports = { createCategoryValidator, updateCategoryValidator };