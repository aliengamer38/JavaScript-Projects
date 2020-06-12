const React = require("react")
const { genPage } = require("./_layout/temp")

const error = props => {
    return (
        <h2>Error! Something Went Wrong!</h2>
    )
}

module.exports = genPage(error)

