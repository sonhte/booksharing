var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "sonhte",
  password: "ethnos",
  database: "booksharing"
});

con.connect(function(err){
  if(err){
    console.log('Error');
    return;
  }
  console.log('Connected');
});

router.get('/', function(req, res, next) {
  con.query('SELECT * FROM USERS WHERE userID=1', function(err, rows, fields){
    con.end();
    if (!err)
      res.render('index', {title:"Hello World", name:rows});
    else
      res.render('index', {title:"Hello World", name:"error"});
  });
});

module.exports = router;
