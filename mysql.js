var express = require("express");
var mysql = require("mysql");

//creating a connection to the db
var con = mysql.createConnection({
	host: "localhost",
	user: "sonhte",
	password: "ethnos",
	database: "booksharing"
});

var app = express();

con.connect(function(err){
	if(err){
		console.log('Error connecting to DB');
		return;
	}
	console.log('Connection established');
});

app.get("/", function(req,res){
	con.query('INSERT INTO USERS VALUES(1,"belouie", "password", NULL, NULL)', function(err,rows,fields){
		con.end();
		if(!err)
			res.send("insert successful");
		else
			res.send("insert faaaaaaaail: " + err);
	});
});

app.listen(3000);