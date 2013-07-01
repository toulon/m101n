
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');

require('./models/FunnyNumber');

var express = require('express')
  , http = require('http')
  , path = require('path');

mongoose.connect('mongodb://localhost/m101');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var home = require('./controllers/home')

app.get('/', home.index);

var homework1 = require('./controllers/homework1')

app.get('/hw1-2/', homework1.homework1_2);
app.get('/hw1-3/:n', homework1.homework1_3);

db.once('open', function() {
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
});


