const Customer = require("../../models/customer/customer")
const { domainName } = require("../../utils/config")


const getCustomerDetails = (req, res, next) => {
    const custId = req.params["custId"]
    console.log(custId)        
    if (req.header("referer") === `${domainName}/customer/index`) {
        Customer.findByPk(custId).then(customer => {
            res.render("customer/details", { customer: customer, isEditMode: false })                           
        }).catch(err => {
            res.render("error")
        })
    } else {
        res.render("error", { title: "Error" })        
    } 
}

module.exports = {
    getCustomerDetails
}