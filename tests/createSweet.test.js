/**
 * @file createSweet.test.js
 * @description Initial test to verify that createSweet returns a valid sweet object with correct properties.
 * This test defines expected behavior before the function is implemented.
 * It checks that the function creates an object with name, category, price, and quantity.
 * It also includes a test for handling zero quantity.
 */

const createSweet = require('../src/createSweet');

describe('createSweet', () => {
    test('should create a sweet object with valid inputs', () => {
        const sweet = createSweet('kaju katli', 'nut based', 50, 20);
        expect(sweet).toEqual({
            name: 'kaju katli',
            category: 'nut based',
            price: 50,
            quantity: 20
        });
    });
    test('should handle zero quantity', () => {
        expect(createSweet('jalebi', 'syrupy', 10, 0)).toEqual({
            name: 'jalebi',
            category: 'syrupy',
            price: 10,
            quantity: 0
        });
    });
});
