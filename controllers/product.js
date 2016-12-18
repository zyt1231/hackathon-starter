/**
 * Created by Ting on 11/13/16.
 */
/**
 * GET /
 * inventory page.
 */
const Product = require('../models/Product');
exports.getProducts = (req, res) => {

    // var p1 = new Product({
    //     sku:'456333',
    //     title:'Circle Logo Pendant',
    //     description:'Brilliant-cut crystal in a thick, MK logo-engraved bezel pendant setting.',
    //     brand:'G',
    //     category:'necklace',
    //     quantity:2,
    //     price:44,
    //     img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQK0gy5CKFxeMygabp3mthESQecfPIVIu9Bw-rPq0-KVdVHnDlXxLIP8V02YF5C0CjUdAdDm2E&usqp=CAY'
    // });
    // p1.save();


    Product.find({}, function(err,products){
        var prodList = [];
        // console.log(products);
        res.render('product', {
            title: 'Product',
            data:   products

        });

    });


};

