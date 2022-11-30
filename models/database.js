const Sequelize = require('sequelize')

//Conexão com Banco MySql

const sequelize = new Sequelize('postagens', 'root', 'Ll123456789@', {
    host: "localhost",
    dialect: 'mysql',
    query: { raw: true }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}