const Sequelize = require("sequelize");
const instancia = require("../../banco-de-dados");

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    populacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    capital: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    area: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
};

const opcoes = {
    freezeTableName: true,
    tableName: "estados",
    timestamps: false,
};

module.exports = instancia.define("estado", colunas, opcoes);
