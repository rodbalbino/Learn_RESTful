'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: { type: String },
    price: { type: Number },
    img_url: { type: String },
    region: { type: String },
    Create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Products', productSchema);