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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
})

app.post('/addSweet', (req, res) => {
  const { name, category, price, quantity } = req.body;
  try {
    const result = addSweet(name, category, Number(price), Number(quantity));
    res.status(201).json(result);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/deleteSweet/:id', (req, res) => {
  const { id } = req.params;
  try {
    const result = deleteSweet(Number(id));
    res.status(200).json(result);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
})


app.get('/viewSweets', (req, res) => {
  try {
    const result = viewSweets();
    res.status(200).json(result);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
})



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


module.exports = app;
