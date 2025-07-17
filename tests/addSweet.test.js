/**
 * @file addSweet.test.js
 * @description Tests for the `addSweet` function from the application.
 * Verifies that sweet objects are correctly created, assigned IDs, and added to the data store.
 * The function under test is assumed to be internally robust, so this suite focuses on input/output correctness.
 */

const addSweet = require('../src/addSweet');
const data = require('../model/data');

/**
 * Reset state before each test to ensure test isolation.
 * This clears the shared data array and reloads modules to reset internal state like ID counters.
 */
beforeEach(() => {
    jest.resetModules();
    data.length = 0;
});

/**
 * Test suite for addSweet function.
 */
describe('addSweet', () => {
    /**
     * @test Verifies that a new sweet is correctly created and added to the data array.
     */
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

    /**
     * @test Verifies that multiple sweets are assigned unique, incremented IDs.
     */
    test('should assign unique, incrementing IDs to multiple sweets', () => {
        const sweet1 = addSweet('rasgulla', 'syrup based', 30, 10);
        const sweet2 = addSweet('soan papdi', 'flaky', 40, 5);

        expect(sweet1.id).toBe(1001);
        expect(sweet2.id).toBe(1002);

        expect(data).toHaveLength(2);
    });

    /**
     * @test Ensures that invalid inputs throw and don't add to the data array.
     */
    test('should handle invalid input gracefully without adding to data', () => {
        expect(() => {
            addSweet(null, undefined, 'pricey', 'plenty');
        }).toThrow(); // ✅ expect function to throw

        expect(data).toHaveLength(0); // ✅ nothing added
    });

    /**
     * @test Ensures that sweet objects maintain their exact input properties.
     */
    test('should retain correct sweet details after creation', () => {
        const sweet = addSweet('peda', 'milk based', 25.5, 50);

        expect(sweet.name).toBe('peda');
        expect(sweet.category).toBe('milk based');
        expect(sweet.price).toBe(25.5);
        expect(sweet.quantity).toBe(50);
    });

    /**
     * @test Confirms that previously added sweets remain unchanged after adding a new one.
     */
    test('should not mutate existing sweets when new sweet is added', () => {
        const sweet1 = addSweet('jalebi', 'syrup based', 20, 30);
        const sweet2 = addSweet('barfi', 'milk based', 45, 25);

        expect(sweet1).not.toEqual(sweet2);
        expect(data).toEqual([sweet1, sweet2]);
    });
});
