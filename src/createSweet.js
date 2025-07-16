/**
 * Factory function to create a sweet item object.
 * 
 * @function createSweet
 * @param {string} name - The name of the sweet (e.g., "Ladoo", "Gulab Jamun").
 * @param {string} category - The category of the sweet (e.g., "Indian", "Dessert").
 * @param {number} price - The price of the sweet in currency units (e.g., 50.00).
 * @param {number} quantity - The available quantity of the sweet.
 * @returns {Object} A sweet object with the specified properties: name, category, price, and quantity.
 */

const createSweet = (name, category, price, quantity) => {
    return {
        name,
        price,
        category,
        quantity
    };
};

// Export the sweet creator function for use in other modules
module.exports = createSweet;
