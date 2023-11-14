const expressValidator = require('express-validator')
const check = expressValidator.check;

const createStudentValidator = () => {
    return [
        check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a name'),
    check('name')
        .isLength({ max: 15 })
        .withMessage('Name should be max 15 characters'),
    check('surname')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a surname'),
    check('surname')
        .isLength({ max: 15 })
        .withMessage('Surname should be max 15 characters'),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide an eamil'),
    check('email')
        .isLength({ max: 25 })
        .withMessage('Email should be max 15 characters'),

    // check('username')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please provide a username'),
    // check('username')
    //     .isLength({ max: 15 })
    //     .withMessage('Username should be max 15 characters'),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a password'),
    check('password')
        .isLength({ max: 30, min: 8 })
        .withMessage('Password should be max 30 characters and min 8 characters'),

    check('birthday')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a date of birth'),

    check('city')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a city'),
    check('surname')
        .isLength({ max: 15 })
        .withMessage('City should be max 15 characters'),

    // check('address')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please provide an address'),
    // check('address')
    //     .isLength({ max: 50 })
    //     .withMessage('Address should be max 50 characters')

    ]
}


const updateStudentValidator = () => {
    return [
    check('studentId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide an id'),

        check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a name'),
    check('name')
        .isLength({ max: 15 })
        .withMessage('Name should be max 15 characters'),

    check('surname')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a surname'),
    check('surname')
        .isLength({ max: 15 })
        .withMessage('Surname should be max 15 characters'),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide an eamil'),
    check('email')
        .isLength({ max: 25 })
        .withMessage('Email should be max 15 characters'),

    // check('username')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please provide a username'),
    // check('username')
    //     .isLength({ max: 15 })
    //     .withMessage('Username should be max 15 characters'),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a password'),
    check('password')
        .isLength({ max: 30, min: 8 })
        .withMessage('Password should be max 30 characters and min 8 characters'),

    check('birthday')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a date of birth'),

    check('city')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Please provide a city'),
    check('surname')
        .isLength({ max: 15 })
        .withMessage('City should be max 15 characters'),

    // check('address')
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please provide an address'),
    // check('address')
    //     .isLength({ max: 50 })
    //     .withMessage('Address should be max 50 characters')

    ]
}


module.exports = { createStudentValidator, updateStudentValidator }