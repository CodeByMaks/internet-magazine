const express = require('express');
const cors = require('cors');
const data = require('../src/data/db.json');

const app = express();

app.use(cors());
app.use(express.json());

// Получение всех продуктов
app.get('/api/products', (req, res) => {
  res.json(data.products);
});

// Получение продукта по ID
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Поиск продуктов
app.get('/api/products/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = data.products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  res.json(results);
});

// Получение категорий
app.get('/api/categories', (req, res) => {
  res.json(data.categories);
});

// Получение продуктов по категории
app.get('/api/categories/:categoryId/products', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const products = data.products.filter(p => p.categoryId === categoryId);
  res.json(products);
});

module.exports = app; 