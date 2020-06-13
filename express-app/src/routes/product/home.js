const router = require("express").Router()
const ProductController = require("../../controllers/product/all")

router.get("/home", ProductController.home.initializeUser)

module.exports = router