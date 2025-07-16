/**
 * @module createSweet
 * @description Exports a factory function that creates a sweet item object with properties:
 * name, category, price, and quantity. 
 * Negative price or quantity is not allowed.
 * Add strict checks for missing values.
 * Add input validation for empty or whitespace-only name and category in createSweet.
 * Add input validation for data type of price and category.
 */


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

    if (name === undefined && category === undefined && price === undefined && quantity === undefined) {
        throw new Error("parameter missing: every parameter");
    }

    if (name === undefined) {
        throw new Error("parameter missing: name");
    }

    if (category === undefined) {
        throw new Error("parameter missing: category");
    }

    if (price === undefined) {
        throw new Error("parameter missing: price");
    }

    if (quantity === undefined) {
        throw new Error("parameter missing: quantity");
    }

    if (name.trim() === '') {
        throw new Error("Name cannot be empty or only whitespace");
    }

    if (category.trim() === '') {
        throw new Error("Category cannot be empty or only whitespace");
    }


    if (typeof price === 'string') {
        throw new Error("Price must be a valid number");
    }

    if (typeof quantity === 'string') {
        throw new Error("Quantity must be a valid number");
    }

    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity must be non-negative.");
    }

    return {
        name,
        price,
        category,
        quantity
    };
};

// Export the sweet creator function for use in other modules
module.exports = createSweet;
