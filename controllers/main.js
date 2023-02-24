const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");

require("dotenv").config()

const login = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        throw new BadRequestError("Please provide username and password...");
    }

    const id = new Date().getDate();
    const payload = { id, username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "30d"});
    res.status(200).json( {sucess: "user created", token});
};

const dashboard = async (req, res) => {
    res.status(200).json( { msg: "dashboard route" } );
}

module.exports = { login, dashboard };