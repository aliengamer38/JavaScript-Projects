const Product = require("../../models/product/product")
const genUniqueId = require("generate-unique-id")
const fs = require("fs")

const generateUniqueId = genUniqueId.bind(null, {
    length: 45,    
})

const initializeUser = (req, res, next) => {
    Product.create({
        id: generateUniqueId(),
        name: "Excel",
        manufacturer: "Microsoft",
        category: "Spreadsheet",
        manufactureDate: "2020-06-13 11:09:00",
        price: 20.02
    }).then(result => {        
        fs.writeFile("./products.json", JSON.stringify(result.dataValues), err => {
            console.log(err)
        })
        res.render("product/home")
    }).catch(err => {
        console.log(err)
        res.render("error")
    })
}
module.exports = {
    initializeUser
}