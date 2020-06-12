const { domainName } = require("../../utils/config")
const success = (req, res, next) => {    
    if (req.header("referer") === `${domainName}/customer/create`) {
        res.render("customer/success")
    } else {
        res.render("error")
    }
}

module.exports = {
    success
}