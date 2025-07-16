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

module.exports = data;