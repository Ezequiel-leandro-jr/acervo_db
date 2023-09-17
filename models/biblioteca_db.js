//models/biblioteca_db.js
module.exports = (sequelize, DataTypes) => {
    const biblioteca_db = sequelize.define('biblioteca_db', {
        //titulo, autor, outroAutores, edicao, publicacao, paginas, isbn, assuntos
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        outrosAutores: {
            type: DataTypes.STRING,
            allowNull: true
        },
        edicao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        publicacao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        paginas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assuntos: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return biblioteca_db;
}