const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/data/db.json');
const middlewares = jsonServer.defaults();

// Добавляем middleware для подсчета общего количества элементов
server.use((req, res, next) => {
  if (req.method === 'GET' && req.path === '/api/products') {
    const db = router.db.getState();
    const totalCount = db.products.length;
    res.setHeader('X-Total-Count', totalCount);
  }
  next();
});

server.use(middlewares);
server.use('/api', router);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`JSON Server запущен на порту ${PORT}`);
}); 