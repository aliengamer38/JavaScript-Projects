const router = require("express").Router()
const { globalDir } = require("../utils/utility")
const path = require("path")

router.use("/", (req, res, next) => {
    res.render("error", {title: "Error"})
})

module.exports = router
