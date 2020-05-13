const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex);

router.get('/login', shopController.getLogin);

router.post('/login', shopController.postLogin);

module.exports = router;