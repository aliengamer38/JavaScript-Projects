const Customer = require("../../models/customer/customer")

const getCustomers = (req, res, next) => {
    Customer.findAll().then(customers => {
        res.render("customer/index", { customers: customers })        
    })
}

module.exports = {
    getCustomers
}
