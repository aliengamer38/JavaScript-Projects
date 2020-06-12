const React = require("react")
const { genPage } = require("../_layout/temp")
const { Fragment } = require("react")


const index = props => {
    return (
        <Fragment>
            <p>User Index</p>
            <p>{props.id}</p>        
            <p>{props.name}</p>        
        </Fragment>
    )
}   

module.exports = genPage(index)