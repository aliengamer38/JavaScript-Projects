const customerController = require("../../controllers/customer/all")

const router = require("express").Router()

router.get("/edit/:id", customerController.edit.getEdit)
router.post("/edit/:id", customerController.edit.postEdit)

module.exports = router