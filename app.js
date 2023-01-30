require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tripsRouter = require('./routes/trips');
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
app.use('/trips', tripsRouter);
app.use('/books', booksRouter);


module.exports = app;
