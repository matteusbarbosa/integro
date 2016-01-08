var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var login = require('./routes/login');
var recovery = require('./routes/recovery');
var join = require('./routes/join');
var routes = require('./routes/index');
var course = require('./routes/course');
var discipline = require('./routes/discipline');
var content = require('./routes/content');
var helmet = require('helmet');
var compression = require('compression');
var session = require('express-session');
var app = express();
var expiryDate = Date.now() + 60 * 60 * 1000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1)

app.use(session({
/*    genid: function(req) {
    return expiryDate; // use UUIDs for session IDs
},*/
secret: 'integro',
resave: false,
saveUninitialized: true,
cookie: { maxAge: null, secure : false }
}));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.use(helmet());
app.use(compression());
app.use('/', routes);
app.use('/recovery', recovery);
app.use('/login', login);
app.use('/join', join);
app.use('/content', content);
app.use('/course', course);
app.use('/discipline', discipline);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('sys/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('sys/error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
