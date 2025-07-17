/**
 * @file Tests for operations in the application.
 * @description This file contains tests for the addSweet function.
 * It verifies that the function correctly adds a sweet to the sweets array with desired id.
 */

const addSweet = require('../src/addSweet');
const createSweet = require('../src/createSweet');
const data = require('../model/data');

describe('test addSweet', () => {
    test('should add a sweet to the sweets array', () => {
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
});


