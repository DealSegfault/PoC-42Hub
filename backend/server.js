const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")
const passport = require('passport');



const config = require('../backend/config/config');

const port = process.env.PORT || 7777;
app.use(morgan('dev')); // log requests to the console
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'example.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

require('./services/passport');
// MongoDb
mongoose.connect(`mongodb+srv://root:${config.mongo.password}@hubguardian-13shh.mongodb.net/test`, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("DB connection alive");
});

app.use(passport.initialize());
app.use(passport.session());

// Router
const router = require('./router/index');
app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);