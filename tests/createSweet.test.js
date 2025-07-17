/**
 * @file createSweet.test.js
 * @description Initial test to verify that createSweet returns a valid sweet object with correct properties.
 * This test defines expected behavior before the function is implemented.
 * It checks that the function creates an object with name, category, price, and quantity.
 * It also includes a test for handling zero quantity.
 * It ensures that the function throws an error for negative price or quantity values.
 * The test suite is designed to ensure that the createSweet function behaves as expected.
 * The test ensures no values are missing
 * the test ensures datatype of quantity and price is not string
 */

const createSweet = require('../src/utils/createSweet');

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

describe('createSweet should not allow negative values', () => {
    test('should throw if price is negative', () => {
        expect(() => createSweet('ladoo', 'round', -10, 5))
            .toThrow();
    });
    test('should throw if quantity is negative', () => {
        expect(() => createSweet('barfi', 'milk based', 30, -5))
            .toThrow();
    });
    test('should throw if both are negative', () => {
        expect(() => createSweet('barfi', 'milk based', -30, -5))
            .toThrow();
    });
});

describe('denial for missing parameters', () => {
    test('should throw if name is missing', () => {
        expect(() => createSweet(undefined, 'nut-based', 50, 5000))
            .toThrow("parameter missing: name");
    });

    test('should throw if category is missing', () => {
        expect(() => createSweet('kaju katli', undefined, 50, 5000))
            .toThrow("parameter missing: category");
    });

    test('should throw if price is missing', () => {
        expect(() => createSweet('kaju katli', 'nut-based', undefined, 5000))
            .toThrow("parameter missing: price");
    });

    test('should throw if quantity is missing', () => {
        expect(() => createSweet('kaju katli', 'nut-based', 50, undefined))
            .toThrow("parameter missing: quantity");
    });

    test('should throw if everything is missing', () => {
        expect(() => createSweet())
            .toThrow("parameter missing: every parameter");
    });
});

describe('createSweet should not allow empty string or white space', () => {

    test('should throw if name is an empty string', () => {
        expect(() => createSweet('', 'fruit based', 20, 10))
            .toThrow();
    });

    test('should throw if category is an empty string', () => {
        expect(() => createSweet('halwa', '', 20, 10))
            .toThrow();
    });

    test('should throw if name is only whitespace', () => {
        expect(() => createSweet('  ', 'nut based', 30, 10))
            .toThrow();
    });

    test('should throw if category is only whitespace', () => {
        expect(() => createSweet('kaju katli', '   ', 30, 10))
            .toThrow();
    });
})

describe('type validation', () => {
    test('should throw if price is a string', () => {
        expect(() => createSweet('mithai', 'misc', '50', 10))
        .toThrow();
    });

    test('should throw if quantity is a string', () => {
        expect(() => createSweet('mithai', 'misc', 50, '10'))
        .toThrow();
    });
})

describe('createSweet - value edge cases', () => {
    test('allows zero price in case of free item or discount or promotion', () => {
        expect(createSweet('free sweet', 'promotion', 0, 10)).toEqual({
            name: 'free sweet',
            category: 'promotion',
            price: 0,
            quantity: 10
        });
    });

    test('should handle large price and quantity', () => {
        expect(createSweet('expensive sweet', 'luxury', 100000, 10000)).toEqual({
            name: 'expensive sweet',
            category: 'luxury',
            price: 100000,
            quantity: 10000
        });
    });
});
