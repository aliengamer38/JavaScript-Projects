const Sequelize = require("sequelize")

const sequelize = new Sequelize("errand-app", "test", "a", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize