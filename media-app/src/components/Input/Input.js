import React, { useState } from "react"
import { capitalizeWord } from "../utils/utility"
import { useDispatch, useSelector } from "react-redux"
import * as actionTypes from "../../reducer/action/actionTypes"

const inputStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.3rem"
}

const inputItemStyle = {
    display: "flex",
    flexDirection: "row",    
    gap: "0.3rem"
}
const fieldValues = {}
const setFieldValues = {}
const input = props => {
    const dispatchDebit = useDispatch();	
	
    props.fieldNames.map(f => {
        [fieldValues[f], setFieldValues[f]] = useState("")
        return null
    })
    const submitForm = (e, debit) => {
        const formFieldValues = {...fieldValues}
        formFieldValues["amount"] = formFieldValues["amount"] === "" ? 0
            : +formFieldValues["amount"]
        e.preventDefault()
        dispatchDebit({ type: actionTypes.ADD_DEBIT, debit: formFieldValues })
        
    }
    const changeInput = e => {
        const inputName = e.target.id;
        setFieldValues[inputName](e.target.value)
    }
    const fieldNames = props.fieldNames ? props.fieldNames : []
    return (
        <form style={inputStyle} onSubmit={e => submitForm(e, fieldValues)}>
            {fieldNames.map(f => (
                <div style={inputItemStyle}>
                    <label htmlFor={f}>{`${capitalizeWord(f)}:`}</label>
                    <input type="text"
                        placeholder={`${capitalizeWord(f)}...`}
                        id={f} value={fieldValues[f]} onChange={e => changeInput(e)}/>
                </div>
            ))}
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default input;