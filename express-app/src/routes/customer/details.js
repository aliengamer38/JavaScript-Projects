const router = require("express").Router()
const customerController = require("../../controllers/customer/all")

router.get("/details/:custId", customerController.details.getCustomerDetails)

module.exports = router