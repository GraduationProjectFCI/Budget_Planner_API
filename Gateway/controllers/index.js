const http = require("../connection/connect.js");

const login = async (req, res) => {
  const data = { email: req.body.email, password: req.body.password };

  const response = await http.post("/login", data);

  res.send(response.data);
};

const register = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    currency: req.body.currency,
    birthdate: req.body.birthdate,
    budget: req.body.budget,
  };

  const response = await http.post("/register", data);
  res.send(response.data);
};

module.exports = { login, register };
