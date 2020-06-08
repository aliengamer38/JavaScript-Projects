import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import * as actionTypes from "../../reducer/action/actionTypes"

const nameStyle = {
    color: "green",
    fontSize: "1.6rem",
    fontWeight: "bold"
}
const amountStyle = {
    fontWeight: "bold"
}
const debitStyle = {
    display: "flex",
    flexDirection: "row",
    width: "60%",   
    alignItems: "center",
    gap: "0.3rem"
}
const fieldNames = ["incAmount", "decAmount"]


const debit = props => {
    useEffect(() => {

    }, [])
    const fieldValues = {}
    const setFieldValues = {}
    const dispatch = useDispatch();
    const decrease = () => {
        dispatch({
            type: actionTypes.DEC_AMOUNT,
            amount: fieldValues["decAmount"] === "" ? "0" : fieldValues["decAmount"],
            id: props.id
        })
    }
    const increase = () => {
        dispatch({
            type: actionTypes.INC_AMOUNT,
            amount: fieldValues["incAmount"] === "" ? "0" : fieldValues["incAmount"],
            id: props.id
        })
    }
    fieldNames.map(f => {
        [fieldValues[f], setFieldValues[f]] = useState("")
        return null
    })
    const changeInput = e => {
        const inputName = e.target.id
        setFieldValues[inputName](e.target.value)
    }
    return (        
        <div style={debitStyle}>
            <span style={nameStyle}>{props.name}</span>
            <span style={amountStyle}>{props.amount}:</span>
            <button onClick={e => increase()}>Increase</button>
            <input type="text" maxLength="3" size="3"
                id="incAmount"
                value={fieldValues["incAmount"]}
                onChange={e => changeInput(e)}/>
            <button onClick={e => decrease()}>Decrease</button>
            <input type="text" maxLength="3" size="3"
                value={fieldValues["decAmount"]}
                id="decAmount"
                onChange={e => changeInput(e)}/>
        </div>                    
    )
}

export default debit;