/**
 * @file searchSweet.test.js
 * @description Tests for the searchSweet function.
 * Ensures correct filtering based on name or category.
 */

const searchSweet = require('../src/searchSweet');
const data = require('../model/data');

describe('searchSweet', () => {
    beforeEach(() => {
        // Reset data before each test
        data.length = 0;
        data.push(
            { id: 1001, name: 'Chocolate Bar', category: 'Chocolate', price: 1.50, quantity: 100 },
            { id: 1002, name: 'Gummy Bears', category: 'Gummy', price: 0.99, quantity: 200 },
            { id: 1003, name: 'Lollipop', category: 'Candy', price: 0.75, quantity: 150 },
            { id: 1004, name: 'Marshmallow', category: 'Fluffy', price: 1.20, quantity: 80 },
            { id: 1005, name: 'Hard Candy', category: 'Candy', price: 0.50, quantity: 300 }
        );
    });

    it('should return sweets that match the name (case-insensitive)', () => {
        const result = searchSweet('chocolate');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Chocolate Bar');
    });

    it('should return sweets that match the category (case-insensitive)', () => {
        const result = searchSweet('candy');
        const names = result.map(s => s.name);
        expect(names).toContain('Lollipop');
        expect(names).toContain('Hard Candy');
        expect(result).toHaveLength(2);
    });

    it('should return multiple sweets if search term matches partials in different fields', () => {
        const result = searchSweet('g');
        const names = result.map(s => s.name.toLowerCase());
        expect(names).toContain('gummy bears');
        expect(result.length).toBeGreaterThanOrEqual(1);
    });

    it('should return empty array if no sweets match', () => {
        const result = searchSweet('toffee');
        expect(result).toEqual([]);
    });

    it('should return all sweets if search term is an empty string', () => {
        const result = searchSweet('');
        expect(result).toHaveLength(5);
    });

    it('should return all sweets if search term is null', () => {
        const result = searchSweet(null);
        expect(result).toHaveLength(5);
    });

    it('should return all sweets if search term is undefined', () => {
        const result = searchSweet(undefined);
        expect(result).toHaveLength(5);
    });

    it('should not throw if data is empty', () => {
        data.length = 0;
        const result = searchSweet('candy');
        expect(result).toEqual([]);
    });

    it('should match substrings inside words', () => {
        const result = searchSweet('mall'); // matches Marshmallow
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Marshmallow');
    });

    it('should handle whitespace in search term gracefully', () => {
        const result = searchSweet('   Candy   ');
        expect(result).toHaveLength(2);
    });
});
