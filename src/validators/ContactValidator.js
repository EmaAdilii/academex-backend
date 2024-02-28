const { body } = require('express-validator');

const contactFormValidator = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required'),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),

    body('subject')
        .trim()
        .notEmpty().withMessage('Subject is required'),

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required'),
];

module.exports = {
    contactFormValidator,
};
