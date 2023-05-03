const axios = require("axios");

const http = axios.create({
  baseURL: "http://app:5000/api/v1/app",
});

module.exports = http;
