const Sequelize = require('sequelize');
require('dotenv').config();


const connection = new Sequelize('curiouscat','root', 'root',{
//    host: process.env.DESENVOLVIMENTO,
//    host: process.env.DOCKER,
    host: process.env.DOCKER || process.env.DESENVOLVIMENTO,
    dialect: 'mysql'
});

module.exports = connection;