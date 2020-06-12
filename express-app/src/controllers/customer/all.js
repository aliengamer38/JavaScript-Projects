const create = require("./create")
const index = require("./index")
const success = require("./success")
const details = require("./details")
const edit = require("./edit")
const del = require("./delete")

module.exports = {
    create,
    index,
    success,
    details,
    edit,
    delete: del
}