var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

var app = express(),
	PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use('/survey', express.static(__dirname + '/app/public'));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});