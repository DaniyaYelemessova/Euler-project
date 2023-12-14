import Euler from "./../src/euler.js";

describe('Euler', () => {

  test('should correctly create a number', () => {
    const newNumber = new Euler(1000);
    expect(newNumber.number).toEqual(1000);
  });

  test('should correctly create a loop', () => {
    const newNumber = new Euler(10);
    expect(newNumber.sumAllNumbers()).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});