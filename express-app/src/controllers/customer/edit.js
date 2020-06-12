const Customer = require("../../models/customer/customer")
const customer = require(".")
const { customerFields } = require("../../models/customer/utility/config")

const postEdit = (req, res, next) => {
    const updatedCust = req.body
    const custId = req.params.id
    Object.keys(updatedCust).map(k => {
        updatedCust[k] = updatedCust[k] === "" ? "N/A" : updatedCust[k]
        return null
    })    
    
    Customer.findByPk(custId).then(cust => {
        customerFields.map(f => {
            cust[f] = updatedCust[f]
            return null
        })
        return cust.save()
    }).then(result => {
        console.log(result)
        Customer.findByPk(custId).then(cust => {
            res.render("customer/details", { customer: cust })
        })
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}
const getEdit = (req, res, next) => {
    const custId = req.params.id
    Customer.findByPk(custId).then(customer => {
        res.render("customer/edit", { customer: customer })                    
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}

module.exports = {
    postEdit, getEdit
}