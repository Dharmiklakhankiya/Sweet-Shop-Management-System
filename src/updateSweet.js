/**
 * @module updateSweet
 * @description This module provides a function to update an existing sweet in the data store.
 * It allows updating the sweet's name, type, price, and quantity by its ID.
 * The function ensures that the sweet exists before attempting to update it.
 */

const data = require('../model/data');
const addSweet = require('./addSweet');

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
 * @throws {Error} If the sweet with the specified ID does not exist.
 */

const updateSweet = (id, updates) => {
    const sweetIndex = data.findIndex(sweet => sweet.id === id);
    
    if (sweetIndex === -1) {
        throw new Error(`Sweet with ID ${id} does not exist`);
    }

    const sweet = data[sweetIndex];

    const updatedSweet = {
        ...sweet,
        ...updates
    };


    data[sweetIndex] = updatedSweet;

    return updatedSweet;
}

module.exports = updateSweet;