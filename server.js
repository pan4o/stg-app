
var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.render('index.ejs');
});

app.listen(3000, function () {
    console.log('work on 3000 port!');
});