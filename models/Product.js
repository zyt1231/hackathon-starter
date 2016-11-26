/**
 * Created by Ting on 11/13/16.
 */
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    sku: { type: String, unique: true , required : true, dropDups: true },
    title: { type: String, required: true },
    description: String,
    brand: String,
    category: { type: String, required: true },
    quantity: {type: Number, required:true},
    price:{type: Number, required:true},
    img:{type:String, required:true},
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

