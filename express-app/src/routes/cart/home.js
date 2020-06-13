const router = require("express").Router()
const cartController = require("../../controllers/cart/all")

router.use("/home", cartController.home.initializeCart)

module.exports = router