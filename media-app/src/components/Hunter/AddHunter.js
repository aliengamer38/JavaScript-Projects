import React, { useEffect, useState } from "react"
import { capitalizeWord } from "../utils/utility"


const fieldNames = ["name", "year"]
const hunterStyle = {
    display: "flex",
    flexDirection : "column",
    alignItems: "center",
    gap: "0.3rem"
}
const hunterInputStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.3rem"
}
const fieldValues = {};
const setFieldValues = {};

const addHunter = props => {
    fieldNames.map(f => {
        [fieldValues[f], setFieldValues[f]] = useState("")
        return null
    })        
    const submit = e => {
        e.preventDefault();
        if (props.addHunter) {
            props.addHunter(fieldValues);
        }
    }
    const changeInput = e => {
        const fieldName = e.target.id;
        setFieldValues[fieldName](e.target.value);
    }
    return (
        <form style={hunterStyle} onSubmit={e => submit(e)}>
            {fieldNames.map(f => (
                <div style={hunterInputStyle}>
                    <label htmlFor={f}>{`${capitalizeWord(f)}:`}</label>
                    <input type="text"
                        placeholder={`${capitalizeWord(f)}...`}
                        id={f}
                        onChange={e => changeInput(e)}/>
                </div>
            ))}
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default addHunter;