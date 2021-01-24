'use strict';

const axios = require('axios');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const common = require('./common');
require('dotenv').config()

const adapter = new FileSync(process.env.DB_FILEPATH);
const db = low(adapter);

/**
 * Function to pick a random food, constrained by arguments passed.
 */
const pickFood = (diet, recent_meals) => {
  //if()
};

/**
 * Function which simply returns a random food from the db.
 */
const randomFood = () => {
  const foods = db.get('foods').value();
  let randFoodIndex = common.randInt(0, foods.length);
  return foods[randFoodIndex];
};

console.log(randomFood());
console.log(randomFood());
console.log(randomFood());
console.log(randomFood());
