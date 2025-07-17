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
    // Reset module cache to get a clean state before each test
    jest.resetModules();
    // Import fresh instances of deleteSweet and addSweet for isolation
    deleteSweet = require('../src/utils/deleteSweet');
    data = require('../model/data');
    addSweet = require('../src/utils/addSweet');
    // Clear existing sweets data before every test
    data.length = 0;
});

describe('deleteSweet - successful deletion', () => {
    test('should delete a sweet by ID and return the deleted sweet', () => {
        // Arrange: Add a new sweet
        const sweet = addSweet('rasgulla', 'syrup based', 30, 10);
        
        // Act: Delete the sweet by ID
        const deleted = deleteSweet(sweet.id);

        // Assert: Ensure it's removed from data and returned properly
        expect(deleted).toEqual(sweet);
        expect(data).not.toContainEqual(sweet);
    });

    test('should delete only the specified sweet', () => {
        // Add three sweets
        const sweet1 = addSweet('jalebi', 'syrup based', 15, 25);
        const sweet2 = addSweet('laddu', 'nut based', 10, 30);
        const sweet3 = addSweet('peda', 'milk based', 12, 50);

        // Delete only the second one
        const deleted = deleteSweet(sweet2.id);

        // Check that only the specified one is gone
        expect(deleted).toEqual(sweet2);
        expect(data).toEqual([sweet1, sweet3]);
    });
});

describe('deleteSweet - invalid input', () => {
    test('should throw an error if ID does not exist', () => {
        // Add one sweet
        addSweet('barfi', 'milk based', 20, 5);

        // Try to delete a non-existent ID
        expect(() => deleteSweet(9999)).toThrow('Sweet not found');
    });

    test('should throw an error if ID is not a number', () => {
        // Invalid input type
        expect(() => deleteSweet('not-a-number')).toThrow('Invalid ID: must be a number');
    });
});

describe('deleteSweet - edge cases', () => {
    test('should throw an error if trying to delete from empty data', () => {
        // No sweets added, delete should fail
        expect(() => deleteSweet(1001)).toThrow('Sweet not found');
    });

    test('should throw an error when deleting same ID twice', () => {
        // Add and delete a sweet
        const sweet = addSweet('sandesh', 'bengali', 18, 20);
        deleteSweet(sweet.id);

        // Try to delete again — should throw
        expect(() => deleteSweet(sweet.id)).toThrow('Sweet not found');
    });
});
