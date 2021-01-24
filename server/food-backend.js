'use strict';

const axios = require('axios');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const common = require('./common');
require('dotenv').config()

const adapter = new FileSync(process.env.DB_FILEPATH);
const db = low(adapter);

/**
 * From an array of non-compatible foods, randomly obtain a maximum of three foods that can be satisfied (three by default)
 */
const getSomeFoods = (nc, num=3) => {
  let goodFoods = getFoods(nc);
  while(goodFoods.length > num) {
    //Randomly remove one element
    goodFoods.splice(common.randInt(0, goodFoods.length), 1);
  }
  return goodFoods;
}

/**
 * From an array of non-compatible foods, obtain all foods that can be satisfied
 */
const getFoods = (nc) => {
  const foods = db.get('foods').value();
  let goodFoods = foods.filter((f) => {
    //f.ingredients and nc have no common
    return !f.ingredients.some(ing => nc.includes(ing));
  });
  return goodFoods;
}

/**
 * Function to pick a random food, constrained by arguments passed.
 * user object: Expecting diet and recent_meals
 */
const pickFood = (user) => {
  //Pick a random food
  let food;
  //Obtain non-compatible list of ingredients for the dietary and merge (as list)
  let nc = getNonCompatible(user.diet);

  //TODO: Note that there might be an infinite loop on picking a food that does not exist
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
    //TODO: This breaks if we pass a diet that does not exist in the DB already
    //TODO: Add case to handle users that have no dietary restrictions
    let ncIngredients = db.get(`diets.${restrict}.non-compatible`).value();
    console.log(ncIngredients);
    for(let ing of ncIngredients) {
      nc.add(ing);
    }
  }
  return Array.from(nc);
}

/**
 * Check to see if the food is ok.
 * nc - non-compatible array
 */
const isGoodFood = (food, nc) => {
  //Check each ingredient for compatibility in foods.ingredients, return if not so
  let ingredients = db.get('foods').find({ name: food }).value().ingredients;
  return !ingredients.some(ing => nc.includes(ing));
};

/**
 * Function which simply returns a random food from the db.
 */
const randomFood = () => {
  const foods = db.get('foods').value();
  let randFoodIndex = common.randInt(0, foods.length);
  return foods[randFoodIndex];
};

module.exports = {
  getFoods,
  getSomeFoods
};
