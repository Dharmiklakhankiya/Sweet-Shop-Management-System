/**
 * @file updateSweet.test.js
 * @description Tests for the `updateSweet` function from the application.
 * Verifies that sweets can be updated by ID and that the data store is modified correctly.
 * This module tests the updateSweet function, ensuring it updates the correct sweet and maintains data integrity.
 */

let updateSweet;
let data;
let addSweet;

beforeEach(() => {
    jest.resetModules();

    updateSweet = require('../src/utils/updateSweet');
    data = require('../model/data');
    addSweet = require('../src/utils/addSweet');
    
    data.length = 0;
})

describe('updateSweet - successful updates', () => {
    test('should update a sweet by ID and return the updated sweet', () => {

        const sweet = addSweet('gulab jamun', 'syrup based', 20, 15);
        
        const updated = updateSweet(sweet.id, { name: 'gulab jamun', category: 'syrup based', price: 25, quantity: 20 });

        expect(updated).toEqual({ id: sweet.id, name: 'gulab jamun', category: 'syrup based', price: 25, quantity: 20 });
        expect(data).toContainEqual(updated);
    });

    test('should update only specified fields of the sweet', () => {
        addSweet('barfi', 'milk based', 20, 5);
        const sweet = addSweet('kaju katli', 'nut based', 50, 5);

        const updated = updateSweet(sweet.id, { price: 60, quantity: 10 });

        expect(updated).toEqual({ id: sweet.id, name: 'kaju katli', category: 'nut based', price: 60, quantity: 10 });
        expect(data).toContainEqual(updated);
    });
})