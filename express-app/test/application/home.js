const { sequelize } = require("./schema")

const start = (callback) => {
    sequelize.sync({
        // force: true
    }).then(result => {
        callback()
    }).catch(err => {
        console.log(err)
    })    
}

module.exports = { start }
