const React = require("react")
const { genPage } = require("../_layout/temp")

const home = props => {
    return (
        <div>
            <p>Home Page</p>
        </div>
    )
}

module.exports = genPage(home)