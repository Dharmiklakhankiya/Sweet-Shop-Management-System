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

describe('successful purchases', () => {
    test('should decrease quantity when enough stock is available', () => {
        const sweet = addSweet('jalebi', 'syrup based', 10, 5);
        const result = purchaseSweet(sweet.id, 3);

        expect(result.quantity).toBe(2);
        expect(data.find(s => s.id === sweet.id).quantity).toBe(2);
    });

    test('should allow purchasing all available stock', () => {
        const sweet = addSweet('peda', 'milk based', 15, 4);
        const result = purchaseSweet(sweet.id, 4);
        expect(result.quantity).toBe(0);
    });
});

describe('stock errors', () => {
    test('should throw error if not enough stock', () => {
        const sweet = addSweet('barfi', 'milk based', 20, 2);
        expect(() => purchaseSweet(sweet.id, 5)).toThrow('Not enough stock');
    });

    test('should throw error if amount is zero or negative', () => {
        const sweet = addSweet('laddu', 'nut based', 12, 10);
        expect(() => purchaseSweet(sweet.id, 0)).toThrow();
        expect(() => purchaseSweet(sweet.id, -2)).toThrow();
    });
});

describe('invalid inputs', () => {
    test('should throw error if sweet does not exist', () => {
        expect(() => purchaseSweet(9999, 1)).toThrow('Sweet not found');
    });

    test('should throw error if amount is not a number', () => {
        const sweet = addSweet('soan papdi', 'flaky', 18, 10);
        expect(() => purchaseSweet(sweet.id, 'five')).toThrow();
        expect(() => purchaseSweet(sweet.id, null)).toThrow();
        expect(() => purchaseSweet(sweet.id, undefined)).toThrow();
    });
});