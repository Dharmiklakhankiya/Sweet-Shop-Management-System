/**
 * @file app.js
 * @description RESTful API server for managing a sweets inventory.
 * Provides endpoints for adding, viewing, updating, deleting,
 * sorting, searching, restocking, and purchasing sweets.
 */

const {
  addSweet,
  deleteSweet,
  viewSweets,
  updateSweet,
  searchSweet,
  sortSweets,
  restockSweet,
  purchaseSweet
} = require('./utils');

const express = require('express');
const app = express();

app.use(express.json());

/**
 * @middleware Enable CORS
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/**
 * @middleware Request logger
 */
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

/**
 * @route POST /addSweet
 * @description Add a new sweet to the inventory.
 * @body {string} name - Name of the sweet.
 * @body {string} category - Category of the sweet.
 * @body {number} price - Price of the sweet.
 * @body {number} quantity - Initial stock quantity.
 */
app.post('/addSweet', (req, res) => {
  const { name, category, price, quantity } = req.body;
  try {
    const result = addSweet(name, category, Number(price), Number(quantity));
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route DELETE /deleteSweet/:id
 * @description Delete a sweet by its ID.
 * @param {number} id - ID of the sweet.
 */
app.delete('/deleteSweet/:id', (req, res) => {
  const { id } = req.params;
  try {
    const result = deleteSweet(Number(id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /viewSweets
 * @description Retrieve all sweets from inventory.
 */
app.get('/viewSweets', (req, res) => {
  try {
    const result = viewSweets();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route PUT /updateSweet/:id
 * @description Update fields of a sweet by ID.
 * @param {number} id - ID of the sweet.
 * @body {string} [name] - New name.
 * @body {string} [category] - New category.
 * @body {number} [price] - New price.
 * @body {number} [quantity] - New quantity.
 */
app.put('/updateSweet/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, price, quantity } = req.body;

  const updates = {};
  if (name !== undefined) updates.name = name;
  if (category !== undefined) updates.category = category;
  if (price !== undefined) updates.price = Number(price);
  if (quantity !== undefined) updates.quantity = Number(quantity);

  try {
    const result = updateSweet(Number(id), updates);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route GET /searchSweet
 * @description Search sweets by keyword in name/category.
 * @query {string} term - Search term.
 */
app.get('/searchSweet', (req, res) => {
  const term = req.query.term;
  const result = searchSweet(term);

  res.status(200).json({
    count: result.length,
    sweets: result
  });
});

/**
 * @route GET /sortSweets
 * @description Sort sweets by a specific key and order.
 * @query {string} key - Field to sort by ('name', 'price', 'quantity', 'category', 'id').
 * @query {string} [order=asc] - Sort order ('asc' or 'desc').
 */
app.get('/sortSweets', (req, res) => {
  const { key, order } = req.query;

  try {
    const result = sortSweets(key, order);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @route PUT /restockSweet/:id
 * @description Increase the stock quantity of a sweet.
 * @param {number} id - Sweet ID.
 * @body {number} amount - Quantity to add.
 */
app.put('/restockSweet/:id', (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const updatedSweet = restockSweet(Number(id), Number(amount));
    res.status(200).json(updatedSweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route PUT /purchaseSweet/:id
 * @description Decrease the stock quantity of a sweet (purchase).
 * @param {number} id - Sweet ID.
 * @body {number} amount - Quantity to purchase.
 */
app.put('/purchaseSweet/:id', (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const updatedSweet = purchaseSweet(Number(id), Number(amount));
    res.status(200).json(updatedSweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
