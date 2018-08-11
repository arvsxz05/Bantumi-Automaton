var express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');

var app = express(),
	http = require('http'),
	server = http.createServer(app);

app.set('port', (process.env.PORT || 5000));

server.listen(app.get('port'), function() {
	console.log('Game running!');
});

app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.engine('html', consolidate.nunjucks);

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('index.html');
});