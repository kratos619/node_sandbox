const path = require('path');

const express = require('express');

const productsController = require('../controller/Products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.getAddProduct);

// exports.routes = router;
//exports.products = products;

module.exports = router;