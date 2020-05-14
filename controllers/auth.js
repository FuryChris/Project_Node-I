const { validationResult } = require('express-validator/check');

exports.getLogin = (req, res, next) => {
    res.render('./auth/login', {
        pageTitle: 'Login',
        path: '/login',
        errorMessage: []
    })
}

exports.postLogin = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array()[0].msg)
        return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'u didnt auth xD loser',
            errorMessage: errors.array()[0].msg,
        });
    }
    console.log('not returning')
    res.render('./auth/login', {
        pageTitle: 'You posted Login',
        path: '/login',
        errorMessage: []
    })
}