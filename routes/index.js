const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Katie Hansen!');
});

module.exports = routes;