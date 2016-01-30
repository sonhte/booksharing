var express = require('express');
var path = require('path');

// booksharing routes
// var index = require('./routes/index');
// var groups = require('./routes/groups');

var app = express();

// setup templating engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'mustache');

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// booksharing route handlers
// app.use('/', index);
// app.use('/groups', groups);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
