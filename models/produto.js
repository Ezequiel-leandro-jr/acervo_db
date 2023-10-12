//arquivo para mapear uma tabela de produto
//modelo do produto = representação local do objeto de uma tabela que existe no banco de dados

const Sequelize = require('sequelize');
const database = require('ACERVO_DB/config.js');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTERGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
});

module.exports = Produto;

