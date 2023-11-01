const {DataTypes} = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas',{ //nome da tabela
    pergunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resposta: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//passando o model para o bd para a criação da tabela 
Pergunta.sync({force: false});

module.exports = Pergunta;