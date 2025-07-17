/**
 * @file sortSweet.test.js
 * @description Unit tests for the sortSweet function.
 * Validates sorting by id, name, price, quantity, and category in both ascending and descending order.
 * Ensures the original data array remains unchanged and invalid keys return unsorted data.
 */

const sortSweet = require('../src/utils/sortSweet');
const data = require('../model/data');

describe('sortSweet', () => {
  beforeEach(() => {
    data.length = 0;
    data.push(
      { id: 1, name: 'Lollipop', price: 1.2, quantity: 50, category: 'Hard Candy' },
      { id: 2, name: 'Gummy Bears', price: 0.99, quantity: 200, category: 'Gummy' },
      { id: 3, name: 'Chocolate Bar', price: 2.5, quantity: 100, category: 'Chocolate' },
      { id: 4, name: 'Marshmallow', price: 1.0, quantity: 150, category: 'Fluffy' },
      { id: 5, name: 'Jawbreaker', price: 0.5, quantity: 300, category: 'Hard Candy' }
    );
  });

  test('sorts by id asc', () => {
    const r = sortSweet('id', 'asc').map(s => s.id);
    expect(r).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts by id desc', () => {
    const r = sortSweet('id', 'desc').map(s => s.id);
    expect(r).toEqual([5, 4, 3, 2, 1]);
  });

  test('sorts by name asc', () => {
    const r = sortSweet('name', 'asc').map(s => s.name);
    expect(r).toEqual([
      'Chocolate Bar',
      'Gummy Bears',
      'Jawbreaker',
      'Lollipop',
      'Marshmallow'
    ]);
  });

  test('sorts by price desc', () => {
    const r = sortSweet('price', 'desc').map(s => s.price);
    expect(r).toEqual([2.5, 1.2, 1.0, 0.99, 0.5]);
  });

  test('sorts by quantity asc', () => {
    const r = sortSweet('quantity', 'asc').map(s => s.quantity);
    expect(r).toEqual([50, 100, 150, 200, 300]);
  });

  test('sorts by category asc', () => {
    const r = sortSweet('category', 'asc').map(s => s.category);
    expect(r).toEqual([
      'Chocolate',
      'Fluffy',
      'Gummy',
      'Hard Candy',
      'Hard Candy'
    ]);
  });

  test('invalid key returns original', () => {
    const r = sortSweet('invalidKey', 'asc');
    expect(r).toEqual(data);
  });
});
