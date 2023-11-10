const Sequelize = require('sequelize');


const connection = new Sequelize('curiouscat','root', 'root',{
//    host: process.env.DESENVOLVIMENTO,
    host: process.env.DOCKER,
    dialect: 'mysql'
});

module.exports = connection;