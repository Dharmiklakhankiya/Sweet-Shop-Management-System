/**
 * @file deleteSweet.test.js
 * @description Tests for the viewSweet function from the application.
 */

const viewSweet = require('../src/viewSweet');
const data = require('../model/data');
const addSweet = require('../src/addSweet');

describe('viewSweet', () => {
    beforeEach(() => {
        data.length = 0;
    });

    it('should return an empty array when no sweets are present', () => {
        const result = viewSweet();
        expect(result).toEqual([]);
    });

    it('should return all sweets when they are present', () => {
        addSweet({ name: 'Chocolate', type: 'Candy', price: 1.5, quantity: 10 });
        addSweet({ name: 'Gummy Bears', type: 'Candy', price: 2.0, quantity: 5 });

        const result = viewSweet();
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Chocolate');
        expect(result[1].name).toBe('Gummy Bears');
    });
});