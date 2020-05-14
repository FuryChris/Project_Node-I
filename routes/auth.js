const express = require('express');
const { body } = require('express-validator/check');

const router = express.Router();
const authController = require('../controllers/auth')


router.get('/login', authController.getLogin);

router.post('/login',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email adress.')
            .normalizeEmail()
    ],
    authController.postLogin);

module.exports = router;