const React = require("react")
const { Fragment } = require("react")

const { genPage } = require("../_layout/temp")

const index = props => {
    return (
        <Fragment>
            <ul>
                {props.customers.map(customer => (
                    <li>                        
                        <a href={`/customer/details/${customer.id}`} className="details-link">
                            {customer.name} ({customer.id.substr(0, 5)}...)
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <a href="/customer/create">Create</a>
            </div>
        </Fragment>
    )
}

module.exports = genPage(index, "/styles/customer/index.css")