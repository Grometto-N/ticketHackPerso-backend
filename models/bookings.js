const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	dep_time: String,
    price : Number,
});

const Booking = mongoose.model('bookings', bookSchema);

module.exports = Booking;