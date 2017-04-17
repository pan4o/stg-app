
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.use("/public", express.static(path.join(__dirname + '/public')));

//Понять чем отличается от варианта с path.join (работают одинаково)
//app.use("/public", express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('work on 3000 port!');
});