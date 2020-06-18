const Cart = require("../../models/cart/cart")
const generateUniqueId = require("generate-unique-id")

const initializeCart = (req, res, next) => {
    const id = generateUniqueId({ length: 45 })    
    Cart.create({
        id: id,
        classification: "Shopping Cart"            
    }).then(result => {
        return Cart.findByPk(id)
    }).then(c => {
        console.log(c)
        return c.createProduct({
            id: generateUniqueId(),
            name: "Excel",
            manufacturer: "Microsoft",
            category: "Spreadsheet",
            manufactureDate: "2020-06-13 11:09:00",
            price: 20.02
        })
    }).then(result => {
        res.render("success")
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}

module.exports = {
    initializeCart
}