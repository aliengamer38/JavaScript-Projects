const React = require("react")
const { genPage } = require("../_layout/temp")
const { capitalizeWord } = require("../../utils/utility")
const { getFieldName } = require("../../models/customer/utility/utility")
const { customerFields } = require("../../models/customer/utility/config")

const create = props => {
    return (
        <form className="create-form" method="post" action="/customer/create">
            {customerFields.map(f => (
                <div className="input-field">
                    <label htmlFor={f}>{`${capitalizeWord(f)}: `}</label>
                    <input type={getFieldName(f)}
                        id={f}
                        name={f}
                        placeholder={`${capitalizeWord(f)}...`}
                        {...(getFieldName(f) === "number" ? { step: 0.001 } : null)} />                    
                </div>
            ))}
            <div>
                <input type="submit" value="Submit"/>
            </div>
            <a href="/customer/index">Index</a>
        </form>
    )
}

module.exports = genPage(create, "/styles/customer/create.css")