/**
 * @file addSweet.test.js
 * @description Tests for the `addSweet` function from the application.
 * Verifies that sweet objects are correctly created, assigned IDs, and added to the data store.
 */

let addSweet;
let data;

/**
 * Reset state before each test to ensure test isolation.
 * This clears the shared data array and reloads modules to reset internal state like ID counters.
 */
beforeEach(() => {
    jest.resetModules(); // 🔁 resets addSweet & idCounter
    addSweet = require('../src/utils/addSweet'); // re-import fresh copy
    data = require('../model/data');
    data.length = 0; // clear previous sweet entries
});

/**
 * Test suite for addSweet function.
 */
describe('addSweet', () => {
    test('should correctly create and return a sweet object with expected properties', () => {
        const sweet = addSweet('kaju katli', 'nut based', 50, 20);

        expect(sweet).toEqual({
            id: 1001,
            name: 'kaju katli',
            category: 'nut based',
            price: 50,
            quantity: 20
        });

        expect(data).toContainEqual(sweet);
    });

    test('should assign unique, incrementing IDs to multiple sweets', () => {
        const sweet1 = addSweet('rasgulla', 'syrup based', 30, 10);
        const sweet2 = addSweet('soan papdi', 'flaky', 40, 5);

        expect(sweet1.id).toBe(1001);
        expect(sweet2.id).toBe(1002);

        expect(data).toHaveLength(2);
    });

    test('should handle invalid input gracefully without adding to data', () => {
        expect(() => {
            addSweet(null, undefined, 'pricey', 'plenty');
        }).toThrow();

        expect(data).toHaveLength(0);
    });

    test('should retain correct sweet details after creation', () => {
        const sweet = addSweet('peda', 'milk based', 25.5, 50);

        expect(sweet.name).toBe('peda');
        expect(sweet.category).toBe('milk based');
        expect(sweet.price).toBe(25.5);
        expect(sweet.quantity).toBe(50);
    });

    test('should not mutate existing sweets when new sweet is added', () => {
        const sweet1 = addSweet('jalebi', 'syrup based', 20, 30);
        const sweet2 = addSweet('barfi', 'milk based', 45, 25);

        expect(sweet1).not.toEqual(sweet2);
        expect(data).toEqual([sweet1, sweet2]);
    });
});
