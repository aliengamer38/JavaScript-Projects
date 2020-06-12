const router = require("express").Router()
const customerController = require("../../controllers/customer/all")

router.get("/create", customerController.create.getCustomerForm)
router.post("/create", customerController.create.postCustomer)

module.exports = router
