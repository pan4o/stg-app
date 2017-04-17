
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*app.get('/', function (request, response) {
    response.render('index.ejs');
});*/

app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/index.html')); });

/*app.use(express.static('./view'));*/

app.listen(3000, function () {
    console.log('work on 3000 port!');
});