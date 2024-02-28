const expressValidator = require('express-validator')
const check = expressValidator.check;

const createCourseValidator = () => {
    return [
        check('title')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a title'),
        check('title')
            .isLength({ max: 60 })
            .withMessage('Title should be max 60 characters'),

        check('description')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a description'),
        check('description')
            .isLength({ max: 300 })
            .withMessage('Description should be max 300 characters'),

        check('lecturer')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a teacher name'),

        check('category_id')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a category Id')

    ]
}


const updateCourseValidator = () => {
    return [
        check('title')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a title'),
        check('title')
            .isLength({ max: 60 })
            .withMessage('Title should be max 60 characters'),

        check('description')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a description'),
        check('description')
            .isLength({ max: 300 })
            .withMessage('Description should be max 300 characters'),

        check('lecturer')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a teacher name'),

        check('category_id')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a category Id')
    ]
}


module.exports = { createCourseValidator, updateCourseValidator }