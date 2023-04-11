import {oddFn} from './main.js';

/* eslint-disable no-undef */
describe('тестируем функцию oddFn', () => {

  it('сверяем результат работы функции oddFn(15) === [1, 3, 5, 7, 9, 11, 13, 15]', () => {

    expect(oddFn(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
  });
});

// toBe   not.toBe  toBeFalse / toBeTrue
// toBeGreaterThen больше/ toBeGreaterThen больше или равно
// toBelessThen меньше/ toBeLessThen меньше или равно
// toBeInstanceOf
// toBeNaN
