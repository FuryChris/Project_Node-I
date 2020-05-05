const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const MONGO_CONNECTION = 'your connection';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  console.log(path.join(__dirname, 'public'))
  res.render('mainview', {
    pageTitle: 'Hello World'
  })
});

mongoose
  .connect(MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });