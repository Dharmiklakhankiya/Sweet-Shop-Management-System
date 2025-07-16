/**
 * @file createSweet.test.js
 * @description Initial test to verify that createSweet returns a valid sweet object with correct properties.
 * This test defines expected behavior before the function is implemented.
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
});
