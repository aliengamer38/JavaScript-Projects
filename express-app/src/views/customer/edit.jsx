const React = require("react")
const { Fragment } = require("react")
const { capitalizeWord } = require("../../utils/utility")
const { genPage } = require("../_layout/temp")
const { customerFields } = require("../../models/customer/utility")


const details = props => {
    return (
        <Fragment>
            <form method="post" action={`/customer/edit/${props.customer.id}`}>
                <div className="customer-details">
                    {customerFields.map(f => (
                        <div className="customer-details_field">
                            <span>{capitalizeWord(f)}:</span>
                            <input type={f === "email"
                                ? "email" : "text"} name={f} id={f}
                                value={props.customer[f]} />
                        </div>
                    ))}
                </div>
                <div className="customer-details_link">
                    <a href="/customer/create">Create</a>
                    <a href="/customer/index">Index</a>                    
                    <input type="submit" value="Save" />                        
                </div>
            </form>
        </Fragment>
    )
}

module.exports = genPage(details, "/styles/customer/details.css")