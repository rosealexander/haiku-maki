require('dotenv').config()


const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet')

const indexRouter = require('./routes/index');
const haikusRouter = require('./routes/haikus');
const configsRouter = require('./routes/configs');

const app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/haikus', haikusRouter);
app.use('/configs', configsRouter);

/* Get Express app to serve up React app */
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
