const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const API_URL = "http://localhost:3000";

module.exports = chai.request(API_URL);
