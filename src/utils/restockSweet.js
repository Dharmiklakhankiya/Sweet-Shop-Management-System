/**
 * @module restockSweet
 * @description Increases the quantity of a sweet in stock.
 */

const data = require('../../model/data');

/**
 * Restocks a sweet by increasing its quantity.
 * @param {number} id - The ID of the sweet.
 * @param {number} amount - The quantity to add.
 * @returns {Object} The updated sweet object.
 * @throws {Error} If sweet not found or invalid input.
 */
function restockSweet(id, amount) {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Sweet not found');
    }
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
        throw new Error('Invalid restock amount');
    }
    const sweet = data.find(s => s.id === id);
    if (!sweet) throw new Error('Sweet not found');
    sweet.quantity += amount;
    return sweet;
}

module.exports = restockSweet;