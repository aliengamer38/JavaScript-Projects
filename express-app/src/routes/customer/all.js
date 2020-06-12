const router = require("express").Router()
const indexRouter= require("./index")
const createRouter = require("./create")
const successRouter = require("./success")
const detailsRouter = require("./details")
const editRouter = require("./edit")
const deleteRouter = require("./delete")

router.use(indexRouter)
router.use(createRouter)
router.use(successRouter)
router.use(detailsRouter)
router.use(editRouter)
router.use(deleteRouter)

module.exports = router