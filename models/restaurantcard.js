var express = require("express");
const app = express();

app.use(express.json());

app.get('/foods', function (req, res) {
    console.log(res);
});