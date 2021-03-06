var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var mkt = require('./routes/mkt');
var login = require('./routes/login');
var recovery = require('./routes/recovery');
var join = require('./routes/join');
var index = require('./routes/index');
var frontpage = require('./routes/frontpage');
var course = require('./routes/course');
var discipline = require('./routes/discipline');
var examination = require('./routes/examination');
var reinforcement = require('./routes/reinforcement');
var classoptional = require('./routes/classoptional');
var media = require('./routes/media');
var category = require('./routes/category');
var declaration = require('./routes/declaration');
var warning = require('./routes/warning');
var support = require('./routes/support');
var user = require('./routes/user');
var schedule = require('./routes/schedule');
var helmet = require('helmet');
var typescript = require('typescript');
var compression = require('compression');
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
app.use('/angular2', express.static(__dirname + '/node_modules/angular2/'));
app.use('/angular2js', express.static(__dirname + '/node_modules/angular2/bundles/'));
app.use('/es6-shim', express.static(__dirname + '/node_modules/es6-shim/'));
app.use('/systemjs', express.static(__dirname + '/node_modules/systemjs/dist/'));
app.use('/typescript', express.static(__dirname + '/node_modules/typescript/'));
app.use('/ng2-uploader', express.static(__dirname + '/node_modules/ng2-uploader/'));
app.use('/rxjs', express.static(__dirname + '/node_modules/rxjs/'));

app.set('trust proxy', 1);

app.set('cfg', {
    list: 15,
    secret: 'integro',
    mail: 'contato@desenvolvedormatteus.com.br',
    mailpw: '84090762',
    mailhost: 'mx1.hostinger.com.br',
    root: 'http://localhost:3000/',
    maildata: 'smtps://contato@desenvolvedormatteus.com.br:84090762@mx1.hostinger.com.br'
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(helmet());
app.use(compression());
app.use('/', index);
app.use('/api', api);
app.use('/mkt', mkt);
app.use('/frontpage', frontpage);
app.use('/recovery', recovery);
app.use('/login', login);
app.use('/join', join);
app.use('/media', media);
app.use('/category', category);
app.use('/declaration', declaration);
app.use('/warning', warning);
app.use('/course', course);
app.use('/discipline', discipline);
app.use('/examination', examination);
app.use('/reinforcement', reinforcement);
app.use('/classoptional', classoptional);
app.use('/support', support);
app.use('/user', user);
app.use('/schedule', schedule);

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
