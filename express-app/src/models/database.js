const Sequelize = require("sequelize")

const sequelize = new Sequelize("errand-app", "HR", "a", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize