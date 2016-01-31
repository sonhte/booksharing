var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

// booksharing routes
var index = require('./routes/index');
// var groups = require('./routes/groups');

var app = express();

// setup templating engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// booksharing route handlers
app.use('/', index);
// app.use('/groups', groups);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
