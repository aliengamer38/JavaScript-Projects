import React from "react"
import Debit from "./Debit"
import { useSelector } from "react-redux"

const debitsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4rem"
}
const debits = props => {    
    const debits = useSelector(state => {
        return state.debit.debits
    })
    const renderDebits = debits.map((d, id) => (
        <Debit name={d.name} amount={d.amount} id={id}/>
    ))
    return (
        <div style={debitsStyle}>
            {renderDebits}
        </div>
    )
}

export default debits