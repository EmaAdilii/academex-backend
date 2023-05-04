const expressValidator = require('express-validator')
const validatorResult = expressValidator.validationResult;

const validate = (req, res, next) => {
    const errors = validatorResult(req);

    console.log(req.body)
    console.log(errors)

    if(errors.isEmpty()) return next();

    const extractErrors = {}

    errors.array().forEach(error => {
        extractErrors[error.param] = error.msg
    })

    return res.status(400).json(extractErrors)
}

module.exports = validate;