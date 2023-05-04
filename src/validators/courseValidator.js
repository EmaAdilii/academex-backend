const expressValidator = require('express-validator')
const check = expressValidator.check;

const createCourseValidator = () => {
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
        .withMessage('Description should be max 300 characters'),

    check('teacher_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a teacher Id'),

    check('category_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a category Id')

    ]
}


const updateCourseValidator = () => {
    return [
    check('courseId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a course Id'),
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
        .withMessage('Description should be max 300 characters'),

    check('teacher_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a teacher Id'),

    check('category_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a category Id')
    ]
}


module.exports = { createCourseValidator, updateCourseValidator }