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

var p1 = new Product({
    sku:'123123',
    title:'Rose Gold Basics Collar Necklace',
    description:'Rose Gold-Tone Crystal Collar Necklace. This beautiful flower collar necklace features silk crystal stones set in rose gold-tone metal.',
    brand:'G',
    category:'necklace',
    quantity:2,
    price:99
});
p1.save();
module.exports = Product;

