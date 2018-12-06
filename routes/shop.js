const path = require('path');

const express = require('express');
const productsController = require('../controller/Products');
const router = express.Router();

router.get('/', productsController.getProduct);

module.exports = router;