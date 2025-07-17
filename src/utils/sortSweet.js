/**
 * @module sortSweet
 * @description Sorts the sweets in the data array based on a given key and order.
 * Returns a new sorted array without modifying the original data.
 */

const data = require('../../model/data');

/**
 * Sorts sweets by a specified key and order.
 *
 * @param {string} key - The property to sort by. Valid keys: 'name', 'price', 'quantity', 'category'.
 * @param {string} [order='asc'] - The sorting order. Can be 'asc' for ascending or 'desc' for descending.
 * @returns {Array<Object>} A new array of sweets sorted by the specified key and order.
 */
function sortSweet(key, order = 'asc') {
  const validKeys = ['name', 'price', 'quantity', 'category' ,'id'];
  if (!validKeys.includes(key)) return data;

  const sorted = [...data].sort((a, b) => {
    const valA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const valB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

    if (valA < valB) return order === 'asc' ? -1 : 1;
    if (valA > valB) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
}

module.exports = sortSweet;
