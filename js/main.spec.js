import {ageClassification} from './main.js';

/* eslint-disable no-undef */
describe('(ТЕСТИРОВАНИЕ В СТРОГОМ ПОРЯДКЕ) тестируем функцию ageClassification', () => {
  let n;
  let i = 0;

  let arr = [-1, 1, 24, 24.01, 44, 44.01, 65, 65.1, 75, 75.01, 90, 90.01, 122, 122.01, 150];

  beforeEach(() => {
    n = arr[i++];
  });

  it('test ageClassification(-1) === null', () => {

    expect(ageClassification(n)).toBe(null);
  });

  it('test ageClassification(1) === детский возраст', () => {

    expect(ageClassification(n)).toBe('детский возраст');
  });

  it('test ageClassification(24) === детский возраст', () => {

    expect(ageClassification(n)).toBe('детский возраст');
  });

  it('test ageClassification(24.01) === молодой возраст', () => {

    expect(ageClassification(n)).toBe('молодой возраст');
  });

  it('test ageClassification(44) === молодой возраст', () => {

    expect(ageClassification(n)).toBe('молодой возраст');
  });

  it('test ageClassification(44.01) === средний возраст', () => {

    expect(ageClassification(n)).toBe('средний возраст');
  });

  it('test ageClassification(65) === средний возраст', () => {

    expect(ageClassification(n)).toBe('средний возраст');
  });

  it('test ageClassification(65.1) === пожилой возраст', () => {

    expect(ageClassification(n)).toBe('пожилой возраст');
  });

  it('test ageClassification(75) === пожилой возраст', () => {

    expect(ageClassification(n)).toBe('пожилой возраст');
  });

  it('test ageClassification(75.01) === старческий возраст', () => {

    expect(ageClassification(n)).toBe('старческий возраст');
  });

  it('test ageClassification(90) === старческий возраст', () => {

    expect(ageClassification(n)).toBe('старческий возраст');
  });

  it('test ageClassification(90.01) === долгожители', () => {

    expect(ageClassification(n)).toBe('долгожители');
  });

  it('test ageClassification(122) === долгожители', () => {

    expect(ageClassification(n)).toBe('долгожители');
  });

  it('test ageClassification(122.01) === null', () => {

    expect(ageClassification(n)).toBe(null);
  });

  it('test ageClassification(150) === null', () => {

    expect(ageClassification(n)).toBe(null);
  });

});

// toBe   not.toBe  toBeFalse / toBeTrue
// toBeGreaterThen больше/ toBeGreaterThen больше или равно
// toBelessThen меньше/ toBeLessThen меньше или равно
// toBeInstanceOf
// toBeNaN
