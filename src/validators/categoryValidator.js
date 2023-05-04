const expressValidator = require('express-validator')
const check = expressValidator.check;

const createCategoryValidator = () => {
    return [
        check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a name'),
    check('name')
        .isLength({ max: 15 })
        .withMessage('Name should be max 15 characters'),

    check('description')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a description'),
    check('description')
        .isLength({ max: 300 })
        .withMessage('Description should be max 300 characters')

    ]
}


const updateCategoryValidator = () => {
    return [
    check('categoryId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a category Id'),
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a name'),
    check('name')
        .isLength({ max: 15 })
        .withMessage('Name should be max 15 characters'),

    check('description')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a description'),
    check('description')
        .isLength({ max: 300 })
        .withMessage('Description should be max 300 characters')
    ]
}


module.exports = { createCategoryValidator, updateCategoryValidator }