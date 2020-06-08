import React, { useState, useContext } from "react"
import { LogContext } from "../../context/log-context"

const launch = props => {
    const logContext = useContext(LogContext)
    const counter = {};
    [counter.count, counter.setCount] = useState(25)
    const changeNumber = () => {
        counter.setCount(prevCount => prevCount + 15)
    }
    return (
        <div>
            <p onClick={e => logContext.display()}>{counter.count}</p>
            <button onClick={e => changeNumber()}>Change Number</button>            
        </div>
    )
}

export default launch