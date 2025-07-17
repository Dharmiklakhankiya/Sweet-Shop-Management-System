/**
 * @module purchaseSweet
 * @description Decreases the quantity of a sweet if enough stock is available.
 * Throws an error if not enough stock or invalid input.
 */

const data = require('../model/data');

/**
 * Purchases a sweet by decreasing its quantity.
 * @param {number} id - The ID of the sweet.
 * @param {number} amount - The quantity to purchase.
 * @returns {Object} The updated sweet object.
 * @throws {Error} If not enough stock, sweet not found, or invalid input.
 */
function purchaseSweet(id, amount) {
    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Sweet not found');
    }
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
        throw new Error('Invalid purchase amount');
    }
    const sweet = data.find(s => s.id === id);
    if (!sweet) throw new Error('Sweet not found');
    if (sweet.quantity < amount) throw new Error('Not enough stock');
    sweet.quantity -= amount;
    return sweet;
}

module.exports = purchaseSweet;