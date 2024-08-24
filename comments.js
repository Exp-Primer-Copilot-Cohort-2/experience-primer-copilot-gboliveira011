// Create web server
// Create a server with express
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.json');

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use static files
app.use(express.static('public'));

// Create a route for comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Create a route for adding comments
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(comments);
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});