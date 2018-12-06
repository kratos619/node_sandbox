//const products = [];
const ProductModel = require('../models/Product.model');

exports.getAddProduct = ((req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

exports.postAddProduct = (req, res, next) => {
    const products = new ProductModel(req.body.title)
    products.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    const products = ProductModel.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}