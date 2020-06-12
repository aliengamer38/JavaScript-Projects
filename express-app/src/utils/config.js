const path = require("path")

const globalDir = path.dirname(process.mainModule.filename)
const port = 3030
const domainName = `http://localhost:${port}`

module.exports = {
    port,
    domainName,
    globalDir
}