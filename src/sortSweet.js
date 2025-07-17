const data = require('../model/data');

function sortSweet(key, order = 'asc') {
  const validKeys = ['name', 'price', 'quantity', 'category'];
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
