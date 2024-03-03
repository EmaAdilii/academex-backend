const expressValidator = require('express-validator')
const { check } = expressValidator;

const createUserValidator = () => {
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
            .withMessage('Please provide an email')
            .isEmail()
            .withMessage('Please provide a valid email address')
            .isLength({ max: 255 })
            .withMessage('Email should be max 255 characters'),

        check('password')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a password')
            .isLength({ max: 30, min: 8 })
            .withMessage('Password should be between 8 and 30 characters'),

            // check('role')
            // .trim()
            // .not()
            // .isEmpty()
            // .withMessage('Please provide a password')   

    ]
}


const updateUserValidator = () => {
    return [
        check('name')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a name')
            .isLength({ max: 15 })
            .withMessage('Name should be max 15 characters'),

        check('surname')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a surname')
            .isLength({ max: 15 })
            .withMessage('Surname should be max 15 characters'),

        check('email')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide an email')
            .isEmail()
            .withMessage('Please provide a valid email address')
            .isLength({ max: 255 })
            .withMessage('Email should be max 255 characters'),

        check('role')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a role')
            .isLength({ max: 15 })
            .withMessage('Surname should be max 15 characters'),


    ]
}

module.exports = { createUserValidator, updateUserValidator }