const http = require("http")
const app = require("express")()
const errorRouter = require("./routes/error")
const staticRouter = require("./routes/static")
const customerRouter= require("./routes/customer/all")
const userRouter = require("./routes/user/all")
const bodyParser = require("body-parser")   
const path = require("path")
const reactRender = require("express-react-views")
const { port, globalDir } = require("./utils/config")
const { startProgram } = require("./utils/start")
const sequelize = require("./models/database")

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
app.use(staticRouter)
app.use(errorRouter)

sequelize.sync().then(result => {
    console.log(result)
    app.listen(port)
}).catch(err => {
    console.log(err)
})

console.log(`Listening at port ${port}`)