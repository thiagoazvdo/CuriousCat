const Sequelize = require('sequelize');

const connection = new Sequelize('curiouscat','root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;