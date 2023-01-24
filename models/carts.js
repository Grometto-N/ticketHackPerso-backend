const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	dep_time: String,
    price : Number,
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;