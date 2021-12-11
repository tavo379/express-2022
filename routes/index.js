const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const peopleRouter = require('./people.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); // path global para todos los endpoints es solo de organizacion

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/people', peopleRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
