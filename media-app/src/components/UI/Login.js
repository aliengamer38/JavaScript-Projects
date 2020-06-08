import React, { useReducer, useState } from "react"
import * as actionTypes from "../utils/actionTypes"
import classes from "./Login.css"
import { machineReducer } from "../Machine/reducer/machine"
import { fieldNames } from "../utils/constants"
   

const login = props => {
    const fieldValues = {}
    const setFieldValues = {}
    const [machines, dispatch] = useReducer(machineReducer, [])        
    fieldNames.map(f => {
        [fieldValues[f], setFieldValues[f]] = useState("");
        return null;
    })
    
    const capitalizeWord = (word) => {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
    }
    const changeInput = (e, f) => {
        setFieldValues[f](e.target.value);
    }
    return (
        <form className={classes.Login} onSubmit={e => props.addMachine(e, fieldValues)}>
            {fieldNames.map(f => (
                <div key={f}>
                    <label htmlFor={f}>{`${capitalizeWord(f)}: `}</label>
                    <input type="text" id={f} value={fieldValues[f]}
                        placeholder={`${capitalizeWord(f)}...`}
                        onChange={e => changeInput(e, f)}/>
                </div>
            ))}
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default login;