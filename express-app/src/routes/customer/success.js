const router = require("express").Router()
const customerController = require("../../controllers/customer/all")

router.get("/success", customerController.success.success)

module.exports = router
