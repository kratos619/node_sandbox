const Seqeulize = require('sequelize');

const sequelize = new Seqeulize('node-complete', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;