module.exports = function (app, db) {
  app.get('/api/notes', (req, res) => {
    res.send('Inside of notes GET endpoint!');
  });
};