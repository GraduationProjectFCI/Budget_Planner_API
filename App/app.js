const express = require("express");
require("dotenv").config();
const app = express();

// import created functions
const connectDB = require("./db/connection");
const appRouter = require("./routes");

// use express.json() to parse JSON bodies into JS objects
app.use(express.json());

//routes
app.use("/api/v1/app", appRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  const port = 5000;
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, "0.0.0.0", () => {
      console.log(`app is listening on port :${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
