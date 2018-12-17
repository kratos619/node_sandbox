const Seqeulize = require('sequelize');
const sequelize = require('../util/database');

const CartItem = sequelize.define('cartitem', {
    id: {
        type: Seqeulize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Seqeulize.INTEGER,
});

module.exports = CartItem;