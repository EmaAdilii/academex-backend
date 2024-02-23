
const {verify} = require("jsonwebtoken")

const verifyToken = (token) => {
    const {APP_SECRET} = process.env
    return verify(token, APP_SECRET)
}

module.exports = verifyToken;