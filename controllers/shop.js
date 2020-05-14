const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('./shop/mainview', {
                products: products,
                pageTitle: 'Shop Page',
                path: '/'
            })
        })
        .catch(err => {
            console.log(err);
        })
}
