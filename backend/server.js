const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")
const passport = require('passport');

require('./services/passport');

const config = require('../backend/config/config');

const port = process.env.PORT || 7777;
app.use(morgan('dev')); // log requests to the console
app.use(cors())
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

// const path = require('path')
// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, 'tracker/build')))
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/tracker/build/index.html'))
// })


app.use(allowCrossDomain);


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

// Router
const router = require('./router/index');
app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);