const axios = require("axios");

const http = axios.create({
  baseURL: "http://auth:3000/api/v1/auth",
});

module.exports = http;
