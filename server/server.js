'use strict';

var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const food = require('./food-backend');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log ("server listening on: http://localhost:" + PORT);
})

app.post('/foods', (req, res) => {
  console.log(req.body)

  //Server randomly picks three cuisines
  //let f1 = food.pickFood(diet, recent_meals);
  res.status(200).send("{restaurant: mcdonalds}");

});

app.listen(4000);
