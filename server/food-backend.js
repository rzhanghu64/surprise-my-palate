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
 * user object: Expecting diet and recent_meals
 */
const pickFood = (user) => {
  //Pick a random food
  let food;
  //Obtain non-compatible list of ingredients for the dietary and merge (as list)
  let nc = getNonCompatible(user.diet);

  //Check against DB to check for dietary restricts
  while(isGoodFood(food = randomFood(), user, nc))
    ;
  return food;
};

const getNonCompatible = (diet) => {
  let nc = new Set();
  //For each dietary restriction...
  for(let restrict of diet) {
    //Loop through each non-compatible ingredient
    let ncIngredients = db.get(`diets.${restrict}.non-compatible`).value();
    for(let ing of ncIngredients) {
      nc.add(ing);
    }
  }
  return Array.from(nc);
}

/**
 * Check to see if the food is ok
 * user object: Expecting diet and recent_meals
 *
 */
const isGoodFood = (food, user, non-compatible) => {
  //Check each ingredient for compatibility in foods.ingredients, return if not so
  
};

/**
 * Function which simply returns a random food from the db.
 */
const randomFood = () => {
  const foods = db.get('foods').value();
  let randFoodIndex = common.randInt(0, foods.length);
  return foods[randFoodIndex];
};
