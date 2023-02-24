// jwt to decode(verify) token
const jwt = require("jsonwebtoken");
const Unauthenticated = require("../errors/unauthenticated") 

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startswith(`Bearer `)) {
        throw new Unauthenticated("No token provided...");
    };

    const token = authHeader.split(" ")[1];

    console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();  // pass to next middleware where this middleware is to be invoked
    } catch (error) {
        throw new Unauthenticated("Not authorized to access this route...")
    }
};

module.exports = authMiddleware;
