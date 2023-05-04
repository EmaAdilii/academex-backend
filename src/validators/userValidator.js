const expressValidator = require('express-validator')
const check = expressValidator.check;

const createUserValidator = () => {
    return [
        check('username')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please provide a username'),
        check('username')
            .isLength({ max: 15 })
            .withMessage('Username should be max 15 characters')

    ]
}


module.exports = { createUserValidator }