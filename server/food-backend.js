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
  //Pick a random food
  let food;
  //Check against DB to check for dietary restricts
  while(isGoodFood(food = randomFood(), diet, recent_meals))
    ;
  return food;
};

/**
 * Check to see if the food is ok
 */
const isGoodFood = (food, diet, recent_meals) => {
  //Obtain non-compatible list of ingredients for the dietary and merge (as list)

  //Check each ingredient for compatibility in foods.ingredients, return if not so
  
  //NOTE: Add this DB call above to minimize, in pickFood
};

/**
 * Function which simply returns a random food from the db.
 */
const randomFood = () => {
  const foods = db.get('foods').value();
  let randFoodIndex = common.randInt(0, foods.length);
  return foods[randFoodIndex];
};
