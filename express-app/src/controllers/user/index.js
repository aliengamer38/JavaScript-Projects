const getUser = (req, res, next) => {
    const { id, name } = req.params
    res.render("user/index", { id, name })    
}

module.exports = {
    getUser
}