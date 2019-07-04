var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('./configs/mongo');

var indexRouter = require('./routes/index');
var inviteRouter = require('./routes/invite');
var usersRouter = require('./routes/users');
var partytypesRouter = require('./routes/partytypes');
var templatesRouter = require('./routes/templates');
var eventsRouter = require('./routes/events');

var cors = require('cors')

var app = express()
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/loveis', function(req, res){
  res.sendFile(__dirname + '/templateViews/loveisTemplate.html');
});
app.use('/', indexRouter);
app.use('/invite', inviteRouter);
// app.use('/loveis', loveisRouter);
app.use('/users', usersRouter);
app.use('/partytypes', partytypesRouter);
app.use('/templates', templatesRouter);
app.use('/events', eventsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
