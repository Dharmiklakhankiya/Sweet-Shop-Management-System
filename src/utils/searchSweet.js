/**
 * @module searchSweet
 * @description Filters sweets from the data array based on the search term.
 * Matches are performed against the name and category fields, case-insensitively.
 * If no term is provided, returns all sweets.
 */

const data = require('../../model/data');

/**
 * Filters sweets by a search term across name and category.
 *
 * @param {string} term - The search string. If null, undefined, or empty, returns all sweets.
 * @returns {Array<Object>} Filtered list of sweets matching the term.
 */
function searchSweet(term) {
    if (!term || typeof term !== 'string' || term.trim() === '') {
        return [...data]; 
    }

    const lowerTerm = term.trim().toLowerCase();

    return data.filter(sweet =>
        sweet.name.toLowerCase().includes(lowerTerm) ||
        sweet.category.toLowerCase().includes(lowerTerm)
    );
}

module.exports = searchSweet;
