/**
 * @module deleteSweet
 * @description Deletes a sweet from the data store by its ID.
 * The module ensures that the sweet is removed from the data array and returns the deleted sweet object.
 */

const data = require('../../model/data');

/**
 * Deletes a sweet from the data array based on its ID.
 *
 * @param {number} id - The ID of the sweet to delete.
 * @returns {Object} The deleted sweet object.
 * @throws {Error} If the ID is not a number or if the sweet is not found.
 */
function deleteSweet(id) {
    // Validate that ID is a number
    if (typeof id !== 'number') {
        throw new Error('Invalid ID: must be a number');
    }

    // Find the index of the sweet with the given ID
    const index = data.findIndex(sweet => sweet.id === id);

    // If no sweet found with that ID, throw error
    if (index === -1) {
        throw new Error('Sweet not found');
    }

    // Remove the sweet from the array and return it
    const [deletedSweet] = data.splice(index, 1);
    return deletedSweet;
}

module.exports = deleteSweet;
