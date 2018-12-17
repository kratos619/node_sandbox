const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/User');
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    User.findById(1)
        .then(user => {
            req.user = user;
            next();
            console.log(user);
            console.log(req.user);

        })
        .catch((e) => {
            console.log(e);

        });
});
app.use(errorController.get404);
Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
//through:CartItem its tell store reltion betn product and cart in CartItem Table
Cart.belongsToMany(Product, {
    through: CartItem
});
Product.belongsToMany(Cart, {
    through: CartItem
});
sequelize
    .sync({
        force: true
    })
    //.sync()
    .then((result) => {
        return User.findById(1);

    })
    .then((user) => {
        if (!user) {
            return User.create({
                name: 'Gaurav Palaspagar',
                email: 'test@test.com'
            })
        }
        return user;
    })
    .then((user) => {
        console.log(user);
        app.listen(3000);
    })
    .catch((e) => {
        console.log(e);

    })