const chai = require('chai');
const assert = chai.assert;

const food_backend = require('../food-backend');

describe('server-backend', () => {
  /*
  it('pickGood', () => {
    let user = {
      'diet': [
        'halal'
      ],
      'meal-history': [
        'chicken',
        'beef',
        'pork'
      ]
    };

    console.log(food_backend.pickFood(user));
    console.log(food_backend.pickFood(user));

  });*/
  it('getFoods', () => {
    let nc1 = ['pork'];
    let nc2 = [];
    assert.isOk(food_backend.getFoods(nc1));
    assert.isOk(food_backend.getFoods(nc2));
    console.log(food_backend.getFoods(nc1));
    console.log(food_backend.getFoods(nc2));
  });

  it('getSomeFoods', () => {
    let nc1 = ['pork'];
    let nc2 = [];
    assert.isOk(food_backend.getSomeFoods(nc1));
    assert.isOk(food_backend.getSomeFoods(nc2));
    console.log(food_backend.getSomeFoods(nc1));
    console.log(food_backend.getSomeFoods(nc2));
  })
});
