/**
 * @module updateSweet
 * @description Updates an existing sweet in the data store safely by ID.
 */

const data = require('../model/data');

/**
 * Updates an existing sweet in the data store by its ID.
 *
 * @function updateSweet
 * @param {number} id - The ID of the sweet to update.
 * @param {Object} updates - An object containing the properties to update.
 * @param {string} [updates.name] - The new name of the sweet.
 * @param {string} [updates.type] - The new type of the sweet.
 * @param {number} [updates.price] - The new price of the sweet.
 * @param {number} [updates.quantity] - The new quantity of the sweet.
 * @returns {Object} The updated sweet object.
 * @throws {Error} If the sweet with the specified ID does not exist or inputs are invalid.
 */
const updateSweet = (id, updates) => {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid sweet ID');
    }

    if (typeof updates !== 'object' || updates === null || Array.isArray(updates)) {
        throw new Error('Invalid update object');
    }

    const sweetIndex = data.findIndex(sweet => sweet.id === id);

    if (sweetIndex === -1) {
        throw new Error(`Sweet with ID ${id} does not exist`);
    }

    const sweet = data[sweetIndex];
    const updatedSweet = { ...sweet };

    for (const key of Object.keys(updates)) {

        const value = updates[key];

        switch (key) {
            case 'name':
            case 'category':
                if (typeof value !== 'string') {
                    throw new Error(`${key} must be a string`);
                }
                updatedSweet[key] = value;
                break;

            case 'price':
            case 'quantity':
                if (typeof value !== 'number' || isNaN(value)) {
                    throw new Error(`${key} must be a valid number`);
                }
                updatedSweet[key] = value;
                break;
        }
    }

    data[sweetIndex] = updatedSweet;
    return updatedSweet;
};

module.exports = updateSweet;
