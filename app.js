const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const product = require('./models/product');
const user = require('./models/User');

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

app.use(errorController.get404);
product.belongsTo(user, {
    constraints: true,
    onDelete: 'CASCADE'
});
user.hasMany(product);
sequelize.sync({
        force: true
    })
    .then((result) => {
        app.listen(3000);

    })
    .catch((e) => {
        console.log(e);

    })