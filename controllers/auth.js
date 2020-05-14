const { validationResult } = require('express-validator/check');



exports.getLogin = (req, res, next) => {
    res.render('./auth/login', {
        pageTitle: 'Login',
        path: '/login'
    })
}

exports.postLogin = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    res.render('./auth/login', {
        pageTitle: 'You posted Login',
        path: '/login'
    })
}