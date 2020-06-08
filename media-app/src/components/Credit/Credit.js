import React, { memo, useEffect, useReducer } from "react"
import * as actionTypes from "../utils/actionTypes"

const creditReducer = (currentState, action) => {
    if (action.type === actionTypes.SET_CREDIT) {
        return action.credits;
    } else {
        throw new Error("Error processing!")
    }
}

const credit = memo(props => {    
    const [cash, dispatchCash] = useReducer(creditReducer, 500);
    return (
        <div>
            <p>{cash}</p>            
        </div>
    )
})
export default credit