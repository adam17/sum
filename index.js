'use strict';

const assert = require('assert');

module.exports = function sum(array) {
  assert.ok(Array.isArray(array), 'Provide array');

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
