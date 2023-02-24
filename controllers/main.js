const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");

require("dotenv").config()

const login = async (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);
    if(!username || !password) {
        throw new BadRequestError("Please provide username and password...");
    }

    const id = new Date().getDate();
    const payload = { id, username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "30d"});
    res.status(200).json( {success: "user created", token, username});
};

const dashboard = async (req, res) => {
    const { id, username } = req.user;


    const randomNumber = Math.floor((Math.random()*100) + 1 );
    res.status(200).json( { msg: `Hello ${username}`,
                            secret: `Your lucky number is ${randomNumber}`  } );
}

module.exports = { login, dashboard };