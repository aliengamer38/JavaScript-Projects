const Customer = require("../../models/customer/customer");
const customer = require(".");

const postDelete = (req, res, next) => {
    const id = req.body.id;
    Customer.findByPk(id).then(customer => {
        return customer.destroy()        
    }).then(result => {
        console.log(result)
        res.status(302).redirect("/customer/index")        
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}

module.exports = {
    postDelete
}