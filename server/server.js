'use strict';

const express = require('express');
const app = express();
const food = require('./food-backend');

app.use(express.json());

app.post('/foods', (req, res) => {
  //console.log(req.body)
  res.status(200).send();
});
