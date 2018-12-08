const Seqeulize = require('sequelize');

//db export
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Seqeulize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Seqeulize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: Seqeulize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Seqeulize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Seqeulize.TEXT
  }
});

module.exports = Product;