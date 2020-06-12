const router = require("express").Router()
const { } = require(".")
const userController = require("../../controllers/user/all")

router.get("/index/:id/:name", userController.index.getUser)
router.get("/index/:id", userController.index.getUser)

module.exports = {
    indexRouter: router
}