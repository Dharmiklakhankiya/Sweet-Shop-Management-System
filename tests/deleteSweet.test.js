/**
 * @file deleteSweet.test.js
 * @description Tests for the `deleteSweet` function from the application.
 * Verifies that sweets can be deleted by ID and that the data store is updated correctly.
 * This module tests the deleteSweet function, ensuring it removes the correct sweet and updates the data array.
 */

const deleteSweet = require('../src/deleteSweet');
const data = require('../model/data');
const addSweet = require('../src/addSweet');

BeforeEach(() => {
    jest.resetModules(); //  resets deleteSweet & data
    data.length = 0; // clear previous sweet entries
    addSweet('kaju katli', 'nut based', 50, 20); // Add a sweet to test deletion
})

describe('deleteSweet', () => {
    test('should delete a sweet by ID and return the deleted sweet', () => {
        const sweet = addSweet('rasgulla', 'syrup based', 30, 10);
        const deleted = deleteSweet(sweet.id);

        expect(deleted).toEqual(sweet);
        expect(data).not.toContainEqual(sweet);
    });

})