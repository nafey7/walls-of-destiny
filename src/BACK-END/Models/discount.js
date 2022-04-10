// percentage
// used
// active

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    percentage: {
        type: Number,
        required: true

    },
    used: {
        type: Number,
        required: true
    },
    active: {
        type: Number,
        required: true
    }

}, {timestamps: true});

const Discount = mongoose.model('Discount', discountSchema);
module.exports = Discount;
