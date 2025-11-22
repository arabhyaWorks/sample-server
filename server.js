const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Get random users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 }
  ];
  res.json(users);
});

// Get random products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 399 }
  ];
  res.json(products);
});

// Get random quote
app.get('/api/quote', (req, res) => {
  const quotes = [
    'Be yourself; everyone else is already taken.',
    'The only way to do great work is to love what you do.',
    'Life is what happens when you\'re busy making other plans.'
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
