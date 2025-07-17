/**
 * @file restockSweet.test.js
 * @description Tests for the restockSweet function.
 * Verifies that restocking a sweet increases its quantity correctly.
 */

const data = require('../model/data');
const addSweet = require('../src/addSweet');
const restockSweet = require('../src/restockSweet');

beforeEach(() => {
    data.length = 0;
});

describe('restockSweet', () => {
    test('should increase quantity when restocked', () => {
        const sweet = addSweet('rasgulla', 'syrup based', 12, 5);
        const result = restockSweet(sweet.id, 3);
        expect(result.quantity).toBe(8);
        expect(data.find(s => s.id === sweet.id).quantity).toBe(8);
    });
});