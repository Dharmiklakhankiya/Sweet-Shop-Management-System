/**
 * @file purchaseSweet.test.js
 * @description Tests for the purchaseSweet function.
 * Verifies that purchasing a sweet decreases its quantity if enough stock is available.
 */

const data = require('../model/data');
const addSweet = require('../src/addSweet');
const purchaseSweet = require('../src/purchaseSweet');

beforeEach(() => {
    data.length = 0;
});

describe('purchaseSweet', () => {
    test('should decrease quantity when enough stock is available', () => {
        const sweet = addSweet('jalebi', 'syrup based', 10, 5);
        const result = purchaseSweet(sweet.id, 3);

        expect(result.quantity).toBe(2);
        expect(data.find(s => s.id === sweet.id).quantity).toBe(2);
    });
});