const CustomerController = require("../../controllers/customer/all")
const router = require("express").Router()

router.post("/delete", CustomerController.delete.postDelete)

module.exports = router