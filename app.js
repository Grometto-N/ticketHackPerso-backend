var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartsRouter = require('./routes/carts');
var booksRouter = require('./routes/books');

var app = express();
const cors = require('cors');
app.use(cors());

// Connection BDD
require('./models/connection');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carts', cartsRouter);
app.use('/books', booksRouter);


const str = "45€";
const essai = str.split('€')
console.log(essai);

module.exports = app;
