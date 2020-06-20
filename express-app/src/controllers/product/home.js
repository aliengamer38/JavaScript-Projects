const Product = require("../../models/product/product")
const genUniqueId = require("generate-unique-id")
const path = require("path")
const fs = require("fs")

const generateUniqueId = genUniqueId.bind(null, {
    length: 45,    
})

const initializeUser = (req, res, next) => {
    // Product.create({
    //     id: generateUniqueId(),
    //     name: "Excel",
    //     manufacturer: "Microsoft",
    //     category: "Spreadsheet",
    //     manufactureDate: "2020-06-13 11:09:00",
    //     price: 20.02
    // }).then(result => {        
    //     const data = result.dataValues
    // }).catch(err => {
    //     console.log(err)
    //     res.render("error")
    // })

    const prod = req.product
    res.render("product/home", { prod: prod })        
}
module.exports = {
    initializeUser
}