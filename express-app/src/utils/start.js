const { Customer } = require("../models/customer/customer")

const start = (callback) => {
    Customer.getCustomers(callback)
}

module.exports = {
    startProgram: start
}