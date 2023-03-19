const express = require('express');
require('dotenv').config();

const connectDB = require('./db/connection');

const app = express();

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
