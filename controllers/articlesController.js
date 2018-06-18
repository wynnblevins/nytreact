module.exports = function (app, db) {
  app.get('/api/articles', function (req, res) {
    db.Article.find({}).then(function (articles) {
      res.send(articles);
    });
  });

  app.post('/api/articles', function (req, res) {
    db.Article.create(req.body).then(function (createdArticle) {
      res.send(createdArticle);
    });
  });

  app.delete('/api/articles', function (req, res) {
    let articleId = req.params.articleId;
    
    db.Article.remove({ _id: articleId }, function(err) {
      if (!err) {
        res.sendStatus(204); // 204 Success with no content,
      } else {
        res.sendStatus(500);
      }
    });
  });
};