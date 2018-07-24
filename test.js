'use strict';

const sum = require('.');
const range = require('range');
const assert = require('assert');

describe('test sum', () => {
  it('sum(range(1, 10)) = 55', () => {
    assert.equal(sum(range(1, 10)), 55);
  });

  it('sum([]) = 0', () => {
    assert.equal(sum([]), 0);
  });

  it('sum([1234] = 1234', () => {
    assert.equal(sum([1234]), 1234);
  });
});
