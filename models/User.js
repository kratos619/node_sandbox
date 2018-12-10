const Seqeulize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
    id: {
        type: Seqeulize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Seqeulize.STRING,
        allowNull: false,
    },
    email: {
        type: Seqeulize.STRING,
        allowNull: false
    }
})

module.exports = User;