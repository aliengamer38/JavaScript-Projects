const React = require("react")
const { Fragment } = require("react")
const { genPage } = require("./_layout/temp")

const success = props => {
    return (
        <Fragment>
            <h2>Success! Response Sent!</h2>
            <a href="/customer/index">Index</a>
        </Fragment>
    )
}

module.exports = genPage(success)

