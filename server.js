
var express = require('express'),
bodyParser = require('body-parser'),
app = express(),
path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.render('index.ejs');
});

app.use(express.static('js'));

app.listen(3000, function () {
    console.log('work on 3000 port!');
});