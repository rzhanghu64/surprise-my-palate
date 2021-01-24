'use strict';

const express = require('express');
const app = express();
const food = require('./food-backend');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/foods', (req, res) => {
  console.log(req.body)

  //Server randomly picks three cuisines
  //let f1 = food.pickFood(diet, recent_meals);
  res.status(200).send("{restaurant: mcdonalds}");

});

app.listen(4000);
