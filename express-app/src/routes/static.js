const express = require("express")
const { globalDir } = require("../utils/config")
const path = require("path")
const router = express.Router()

router.use(express.static(path.join(globalDir, "public")))

module.exports = router