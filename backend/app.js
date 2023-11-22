'use strict';
const debug = require('debug')('my express app');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const index = require('./routes/index');
const admin = require('./routes/admin');
const auth = require('./routes/auth');
const catalog = require('./routes/catalog');
const cart = require('./routes/cart');
const { adminAuth, userAuth } = require("./middleware/auth.js");


const app = express();
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://lazyhome-front-ccr6.onrender.com');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS, GET");
    next();
  });

router.use('/', index);
//router.use('/admin', adminAuth, admin);
router.use('/admin', admin);
router.use('/auth', auth);
router.use('/catalog', catalog);
//router.use('/cart', userAuth, cart);
router.use('/cart', cart);
app.use('/api', router);
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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);


const server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
