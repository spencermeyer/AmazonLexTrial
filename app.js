var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lookupRouter = require('./routes/lookup');
var robotRouter = require('./routes/robot');

var app = express();

app.use(cors({
  origin: '*'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lookup', lookupRouter)
app.use('/robot', robotRouter)

var port = 9090;
app.listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;
