const Product = require('../models/product');



exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            console.log(products);
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

exports.getLogin = (req, res, next) => {
    res.render('./auth/login', {
        pageTitle: 'Login',
        path: '/login'
    })
}

exports.postLogin = (req, res, next) => {
    res.render('./auth/login', {
        pageTitle: 'You posted Login',
        path: '/login'
    })
}