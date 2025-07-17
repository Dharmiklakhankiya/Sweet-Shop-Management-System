/**
 * @file deleteSweet.test.js
 * @description Tests for the `deleteSweet` function from the application.
 * Verifies that sweets can be deleted by ID and that the data store is updated correctly.
 * This module tests the deleteSweet function, ensuring it removes the correct sweet and updates the data array.
 */

let deleteSweet;
let data;
let addSweet;

beforeEach(() => {
    jest.resetModules();
    deleteSweet = require('../src/deleteSweet');
    data = require('../model/data');
    addSweet = require('../src/addSweet');
    data.length = 0;
});

describe('deleteSweet - successful deletion', () => {
    test('should delete a sweet by ID and return the deleted sweet', () => {
        const sweet = addSweet('rasgulla', 'syrup based', 30, 10);
        const deleted = deleteSweet(sweet.id);

        expect(deleted).toEqual(sweet);
        expect(data).not.toContainEqual(sweet);
    });

    test('should delete only the specified sweet', () => {
        const sweet1 = addSweet('jalebi', 'syrup based', 15, 25);
        const sweet2 = addSweet('laddu', 'nut based', 10, 30);
        const sweet3 = addSweet('peda', 'milk based', 12, 50);

        const deleted = deleteSweet(sweet2.id);

        expect(deleted).toEqual(sweet2);
        expect(data).toEqual([sweet1, sweet3]);
    });
});

describe('deleteSweet - invalid input', () => {
    test('should throw an error if ID does not exist', () => {
        addSweet('barfi', 'milk based', 20, 5);
        expect(() => deleteSweet(9999)).toThrow('Sweet not found');
    });

    test('should throw an error if ID is not a number', () => {
        expect(() => deleteSweet('not-a-number')).toThrow('Invalid ID: must be a number');
    });
});


