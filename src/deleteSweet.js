/**
 * @module deleteSweet
 * @description Deletes a sweet from the data store by its ID.
 * The module ensures that the sweet is removed from the data array and returns the deleted sweet object.
 */

const data = require('../model/data');

function deleteSweet(id) {
    if (typeof id !== 'number') {
        throw new Error('Invalid ID: must be a number');
    }

    const index = data.findIndex(sweet => sweet.id === id);

    if (index === -1) {
        throw new Error('Sweet not found');
    }

    const [deletedSweet] = data.splice(index, 1);
    return deletedSweet;
}

module.exports = deleteSweet;
