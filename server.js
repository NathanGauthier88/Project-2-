// Dependencies

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const reviewsController = require('./controllers/reviews');

// Initialize
const app = express();

// Configure
require('dotenv').config();
const PORT = process.env.PORT || "4005";

//Connection
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error.message + 'mongoDB error!');
});

db.on('connected', () => {
    console.log('mongoDB successfully connected');
});

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')) 
app.use(methodOverride('_method')); 

// Mount
app.get('/', (req, res) => {
    res.redirect("/reviews")
})


app.use('/reviews', reviewsController)

// Listener
app.listen(PORT, () => {
    console.log(`Express is listening on PORT ${PORT}`)
})
