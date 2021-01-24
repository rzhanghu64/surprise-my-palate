'use strict';

/**
 * Generates a random integer in the range [a, b)
 */
const randInt = (a, b) => {
  return Math.floor(Math.random() * b) + a;
};

module.exports = {
  randInt
};
