const React = require("react")
const { genPage } = require("../_layout/temp")
const { capitalizeWord } = require("../../utils/utility")

const customerFields = ["name", "email", "address", "description", "gender"]

const create = props => {
    return (
        <form className="create-form" method="post" action="/customer/create">
            {customerFields.map(f => (
                <div className="input-field">
                    <label htmlFor={f}>{`${capitalizeWord(f)}: `}</label>
                    <input type={f === "email" ? "email" : "text"}
                        id={f}
                        name={f}
                        placeholder={`${capitalizeWord(f)}...`}/>
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