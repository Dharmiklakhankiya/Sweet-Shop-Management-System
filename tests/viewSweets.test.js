/**
 * @file deleteSweet.test.js
 * @description Tests for the viewSweet function from the application.
 */

const viewSweets = require('../src/utils/viewSweets');
const data = require('../model/data');
const addSweet = require('../src/utils/addSweet');

describe('viewSweets', () => {
    beforeEach(() => {
        data.length = 0;
    });

    it('should return an empty array when no sweets are present', () => {
        const result = viewSweets();
        expect(result).toEqual([]);
    });

    it('should return all sweets when they are present', () => {
        addSweet('Chocolate', 'Candy', 1.5, 10);
        addSweet('Gummy Bears', 'Candy', 2.0, 5);

        const result = viewSweets();
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Chocolate');
        expect(result[1].name).toBe('Gummy Bears');
    });
});