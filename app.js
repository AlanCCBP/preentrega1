var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cartRouter = require('./routes/cartRouter');
const productRouter = require('./routes/productRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/cart', cartRouter);
app.use('/api/products', productRouter);

module.exports = app;
