const express = require('express');

const routes = express.Router();

const produtos = require('./controllers/produtos');

routes.get('/', (req, res) => {
    res.send('API produtos Respondendo');
});

routes.post('/produtos', produtos.create);
routes.get('/produtos', produtos.read);
routes.delete('/produtos/:id', produtos.del);
routes.put('/produtos/:id', produtos.update);
module.exports = routes;