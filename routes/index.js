const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('I should be on Heroku');
});

module.exports = routes;