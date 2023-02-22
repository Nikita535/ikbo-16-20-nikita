const {Sequelize} = require('sequelize');

module.exports = new Sequelize("pr","postgres","Nikita_228_",
    {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        schema: "public"
    }
)