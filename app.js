const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const MONGO_CONNECTION = 'mongodb+srv://chris-RWuser:hAZ6DuiEbIr4TMdI@cluster0-qn7m4.mongodb.net/shop?retryWrites=true&w=majority';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);


// app.use('/', (req, res, next) => {
// 	console.log('rendering main page huehue')
// 	res.render('mainview', {
// 		pageTitle: 'Hello World'
// 	})
// });

mongoose
	.connect(MONGO_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(result => {
		app.listen(3001);
		console.log('Connected Suck Cess Fully at port 3000')
	})
	.catch(err => {
		console.log(err);
	});