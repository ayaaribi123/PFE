const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// setting 'ejs' as template engine
app.set('view engine', 'ejs');

// set the path our 'views' are going to be coming from
app.set('views', __dirname + '/views');  // Corrected path for views

// body parser to get information from 'form' element
app.use(express.urlencoded({ extended: false }));

// GET /styles.css, images, and js files
app.use('/src', express.static('src'));
app.use(express.static('src'));

// To use multer for uploading files to the database (images)
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Database connection successful!'))
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use('/', require('./index'));
app.use('/auth', require('./auth'));
app.use('/users', require('../mongolog/User'));
app.use('/admin', require('./admin'));

// To handle the not found page
app.use((req, res) => {
	res.status(404).send(`Sorry can't find that!`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
