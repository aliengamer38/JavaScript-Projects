const Cart = require("../../models/cart/cart")
const generateUniqueId = require("generate-unique-id")

const initializeCart = (req, res, next) => {
    Cart.create({
        id: generateUniqueId({ length: 45 }),
        classification: "Shopping Cart"        
    }).then(result => {
        res.render("cart/home")
        console.log(result)
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}

module.exports = {
    initializeCart
}