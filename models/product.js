const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const Product = mongoose.model('Product', productSchema);

exports.Product = Product;
exports.productSchema = productSchema;