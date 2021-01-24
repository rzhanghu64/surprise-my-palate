const chai = require('chai');
const assert = chai.assert;

const food_backend = require('../food-backend');

describe('server-backend', () => {
  it('pickGood', () => {
    let user = {
      'diet': [
        'gluten'
      ],
      'meal-history': [
        'chicken',
        'beef',
        'pork'
      ]
    };

    console.log(food_backend.pickFood(user));
    console.log(food_backend.pickFood(user));

  });
});
