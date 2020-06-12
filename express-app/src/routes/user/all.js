const router = require("express").Router()
const { indexRouter } = require("./index")

router.use(indexRouter)

module.exports = router
