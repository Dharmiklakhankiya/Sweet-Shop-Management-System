/**
 * @module model/data.js
 * @description
 * This module provides in-memory data storage for the application.
 * It exports an empty array intended to temporarily hold data during runtime.
 *
 * Since persistent storage (e.g., a database) is not required for this application,
 * this array will be used as a lightweight substitute.
 *
 * Note: The use of `const` prevents reassignment of the array reference,
 * but the contents of the array (i.e., its elements) remain mutable.
 */

const data = [];

/** * Sample data to populate the in-memory array.
 * This data can be used for testing purposes.
  data.push(
    {
      id: 1,
      name: 'Gulab Jamun',
      category: 'Desi',
      price: 40,
      quantity: 20
    },
    {
      id: 2,
      name: 'Kaju Katli',
      category: 'Dry Fruit',
      price: 60,
      quantity: 15
    },
    {
      id: 3,
      name: 'Rasgulla',
      category: 'Bengali',
      price: 35,
      quantity: 25
    },
    {
      id: 4,
      name: 'Ladoo',
      category: 'Festival',
      price: 25,
      quantity: 30
    },
    {
      id: 5,
      name: 'Barfi',
      category: 'Milk',
      price: 30,
      quantity: 18
    }
  );
*/
module.exports = data;