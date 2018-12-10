const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //const product = new Product(title, imageUrl, description, price);
  Product.create({
      title: title,
      imgUrl: imageUrl,
      price: price,
      description: description
    })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);

    })

};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    }).
  catch((e) => {
    console.log(e);

  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.imgUrl = updatedImageUrl;
      product.price = updatedPrice;
      product.description = updatedDesc;
      return product.save();
      //res.redirect('/admin/products');
    })
    .then((result) => {
      res.redirect('/admin/products')
    })
    .catch((e) => {
      console.log(e);

    })
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });

    })
    .catch((e) => {
      console.log(e);

    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log('Product Destroy');

      res.redirect('/admin/products');
    })
    .catch((e) => {
      console.log(e);

    })
  // Product.destroy(prodId);
};