const express = require('express');
const cors = require('cors');
const data = require('../src/data/db.json');

const app = express();

// Настройка CORS
const corsOptions = {
  origin: 'https://internet-magazine-4jwp.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Получение всех продуктов
app.get('/api/products', (req, res) => {
  try {
    if (!data.products) {
      throw new Error('Products data not found');
    }
    res.json(data.products);
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    res.status(500).json({ 
      error: 'Внутренняя ошибка сервера',
      message: error.message 
    });
  }
});

// Получение продукта по ID
app.get('/api/products/:id', (req, res) => {
  try {
    const product = data.products.find(p => p.id === parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Ошибка при получении продукта:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// Поиск продуктов
app.get('/api/products/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const results = data.products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
    res.json(results);
  } catch (error) {
    console.error('Ошибка при поиске продуктов:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// Получение категорий
app.get('/api/categories', (req, res) => {
  try {
    res.json(data.categories || []);
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// Получение продуктов по категории
app.get('/api/categories/:categoryId/products', (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const products = data.products.filter(p => p.categoryId === categoryId);
    res.json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов категории:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error('Ошибка сервера:', err);
  res.status(500).json({ 
    error: 'Внутренняя ошибка сервера',
    message: err.message
  });
});

// Обработка 404
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: 'Запрашиваемый ресурс не найден'
  });
});

module.exports = app; 