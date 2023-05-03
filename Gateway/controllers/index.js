const http = require("../connection/auth.js");

const login = async (req, res) => {
  const data = { email: req.body.email, password: req.body.password };

  const response = await http.post("/login", data);

  res.status(response.data.status).send(response.data);
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
  res.status(response.data.status).send(response.data);
};

const confirmation = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
    code: req.body.code,
  };
  const response = await http.post("/confirmation", data);
  res.status(response.data.status).send(response.data);
};

const validate = async (req, res) => {
  //get the token from req headers

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized" });
  } else {
    const token = req.headers.authorization.split(" ")[1];
    const response = await http.post("/validate", { token });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = { login, register, confirmation, validate };
