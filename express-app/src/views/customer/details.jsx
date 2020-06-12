const React = require("react")
const { Fragment } = require("react")
const { capitalizeWord } = require("../../utils/utility")
const { genPage } = require("../_layout/temp")
const { customerFields } = require("../../models/customer/utility/config")


const details = props => {
    return (
        <Fragment>
            <form method="get" action={`/customer/edit/${props.customer.id}`}>
                <div className="customer-details">
                    {customerFields.map(f => (
                        <div className="customer-details_field">
                            <span>{capitalizeWord(f)}:</span>
                            <span>{props.customer[f]}</span>
                        </div>
                    ))}
                </div>
                <div className="customer-details_link">
                    <a href="/customer/create">Create</a>
                    <a href="/customer/index">Index</a>                    
                    <input type="submit" value="Edit" />                                   
                </div>
            </form>
        </Fragment>
    )
}

module.exports = genPage(details, "/styles/customer/details.css")