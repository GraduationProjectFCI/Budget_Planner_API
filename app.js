const express = require('express');
require('dotenv').config();
const app = express();

// import created functions
const connectDB = require('./db/connection');
const authRouter = require("./routes/auth");


// use express.json() to parse JSON bodies into JS objects
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening at http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }

};

start();
