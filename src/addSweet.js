/**
 * @module addSweet
 * @description Adds a sweet to the data array.
 * This function takes a sweet object as an argument and adds it to the `data` array.
 * This module creates object using createSweet module.
 */


const data = require('../model/data');
const createSweet = require('./createSweet');

let idCounter = 1001

function addSweet(name,category,price,quantity) {
    try{
        const sweet = createSweet(name, category, price, quantity);
        sweet.id = idCounter++;
        data.push(sweet);
        return sweet;
    }catch (error) {
        console.error(error);
    }
}

module.exports = addSweet;