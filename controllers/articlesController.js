module.exports = function (app, db) {
  app.get('/api/articles', (req, res) => {
    res.send({ express: 'Hello From Articles Endpoint' });
  });
};