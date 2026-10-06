/*
Write tests for the division into __tests__/calculator.test.js file. There should be one
positive and at least four negative tests for various cases, where input is invalid (and
this you should be able to figure out from the implementation code). Each test is 2
points and maximum number of points for this assignment is 10.
*/ 


import { divide } from '../src/calaulator.js';

// Positive test: divide two numbers correctly
test('divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
});

// Negative test: division by zero
test('division by zero throws RangeError', () => {
    expect(() => divide(6, 0)).toThrow(RangeError);
});
// Negative test: non-number arguments
test('non-number arguments throw TypeError', () => {
    expect(() => divide(6, 'a')).toThrow(TypeError);
    expect(() => divide('a', 3)).toThrow(TypeError);
});
// Negative test: NaN arguments
test('NaN arguments throw TypeError', () => {
    expect(() => divide(NaN, 3)).toThrow(TypeError);
    expect(() => divide(6, NaN)).toThrow(TypeError);
});
// Negative test: both arguments are invalid
test('both arguments are invalid throw TypeError', () => {
    expect(() => divide('a', 'b')).toThrow(TypeError);
    expect(() => divide(NaN, 'b')).toThrow(TypeError);
    expect(() => divide('a', NaN)).toThrow(TypeError);
});
