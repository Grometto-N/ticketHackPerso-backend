const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
    price : Number,
});

const Booking = mongoose.model('bookings', bookSchema);

module.exports = Booking;