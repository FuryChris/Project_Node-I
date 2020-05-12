const Product = require('../models/product');



exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            console.log(products);
            res.render('mainview', {
                products: products,
                pageTitle: 'Shop Page',
                path: '/'
            })
        })
        .catch(err => {
            console.log(err);
        })
}