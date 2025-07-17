/**
 * @module viewSweets
 * @description Function to view all sweets in the application.
 * This module exports a function that retrieves all sweets from the data store.
 */

const data = require('../model/data'); 

function viewSweets() {
    return [...data];
}

module.exports = viewSweets;