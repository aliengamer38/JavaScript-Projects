const generateId = require("generate-unique-id").bind(null, {
    length: 45
})

const { start } = require("./home")
const { Order, OrderProduct, Product } = require("./schema")


const update = () => {
    // Order.create({
    //     id: generateId(),
    //     description: "Console"
    // }).then(o => {
    //     console.log(o)
    // }).catch(err => {
    //     console.log(err)
    // })
    Order.findByPk("mjg2jtwplglae6t6s5vsqvrptio6996qodysp5bpr28ms")
        .then(o => { 
            o.createProduct({
                id: generateId(),
                name: "Dark Souls",
                manufactureDate: "2020-06-14 12:00:00"
            })
        })
        .catch(err => console.log(err))
}

start(update)