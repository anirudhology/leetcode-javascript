const myPow = require('../../src/math/pow_xn');

test('power with zero exponent', () => {
  expect(myPow(2.0, 0)).toBeCloseTo(1.0, 5);
});

test('power with negative exponent', () => {
  expect(myPow(2.0, -2)).toBeCloseTo(0.25, 5);
});

test('power with positive even exponent', () => {
  expect(myPow(2.0, 4)).toBeCloseTo(16.0, 5);
});

test('power with positive odd exponent', () => {
  expect(myPow(2.0, 3)).toBeCloseTo(8.0, 5);
});

test('power with base zero', () => {
  expect(myPow(0.0, 5)).toBeCloseTo(0.0, 5);
});

test('power with base one', () => {
  expect(myPow(1.0, 5)).toBeCloseTo(1.0, 5);
});

test('power with base negative one odd exponent', () => {
  expect(myPow(-1.0, 3)).toBeCloseTo(-1.0, 5);
});

test('power with base negative one even exponent', () => {
  expect(myPow(-1.0, 2)).toBeCloseTo(1.0, 5);
});