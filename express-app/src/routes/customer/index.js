const router = require("express").Router()
const { Customer } = require("../../models/customer/customer")
const customerController = require("../../controllers/customer/all")

router.get("/index", customerController.index.getCustomers)

module.exports = router
