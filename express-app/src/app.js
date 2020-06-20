const http = require("http")
const app = require("express")()
const errorRouter = require("./routes/error")
const staticRouter = require("./routes/static")
const customerRouter= require("./routes/customer/all")
const userRouter = require("./routes/user/all")
const productRouter = require("./routes/product/all")
const cartRouter = require("./routes/cart/all")
const bodyParser = require("body-parser")   
const path = require("path")
const reactRender = require("express-react-views")
const { port, globalDir } = require("./utils/config")
const { startProgram } = require("./utils/start")
const sequelize = require("./models/database")
const Product = require("./models/product/product")
const Cart = require("./models/cart/cart")

// render engine (jsx)
const reactRenderEngine = reactRender.createEngine()
app.engine("jsx", reactRenderEngine)
app.set('views', path.join(globalDir, "views"));
app.set('view engine', 'jsx');

// render engine (jsx)
// app.set("view engine", "ejs")

// parser
const appParser = bodyParser.urlencoded({})
app.use(appParser)

// router
app.use("/customer", customerRouter)
app.use("/user", userRouter)
app.use("/cart", cartRouter)
app.use("/product", (req, res, next) => {
    req.product = "product middleware"
    next()
})
app.use("/product", productRouter)
app.use(staticRouter)
app.use(errorRouter)

// Product.belongsTo(Cart, { constraints: true, onDelete: "CASCADE" })
// Cart.hasMany(Product)

// sequelize.sync({ force: true }).then(result => {        
//     app.listen(port)
// }).catch(err => {
//     console.log(err)
// })

app.listen(port)

console.log(`Listening at port ${port}`)