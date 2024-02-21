const verifyToken = require("../utils/verifyToken");
const { Unauthorized } = require("http-errors");

const checkAuth = (req, res, next) => {
    try {
        const authorizationToken = req.headers.authorization;
        if (!authorizationToken) throw new Unauthorized();

        const token = authorizationToken.split(" ");
        if (token[0] !== "Bearer") throw new Unauthorized();

        const data = verifyToken(token[1]);
        if (!data) throw new Unauthorized();

        req.user = data;
        console.log("Token payload:", data); 
        return next();
    } catch (err) {
        console.error("Error in checkAuth middleware:", err);
        throw new Unauthorized();
    }
};

module.exports = { checkAuth };