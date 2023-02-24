require("express-async-errors");
const express = require("express");
const app = express();

require("dotenv").config();

// for body
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3000;

// import 'data' route
const mainRouter = require("./routes/data");

// middleware
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");

// base route
app.use("/api/v1", mainRouter);  // needs a route 

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`Server started on port ${port}...`);
        });   
    } catch (error) {
        console.log(error);
    }
};

start();
