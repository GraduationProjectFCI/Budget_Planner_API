const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());

const cors = require("cors");

app.use(cors("*"));

// import created functions
const { login, register } = require("./controllers/index");

app.get("/", (req, res) => {
  res.send("Hello World from the gateway");
});
app.post("/login", login);
app.post("/register", register);

const start = async () => {
  const port = 4000;
  try {
    app.listen(port, "gateway", () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
