require('dotenv').config();
const env = require("./index")();

console.log(env.view("PROJECT_SECRET_KEY_VALUE"))