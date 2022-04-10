const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    customer_username: {
        type: String,
        required: true

    },
    customer_email: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_id: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

}, {timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
