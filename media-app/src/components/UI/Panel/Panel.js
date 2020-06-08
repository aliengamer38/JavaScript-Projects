import React from "react"
import useTime from "../../hooks/useTime"

const panel = props => {
    const { time, addTime, setTime } = useTime(300, null)    
    const addToTime = () => {
        addTime();
    }
    const setToTime = () => {
        setTime();
    }
    return (
        <div>
            <p>{time}</p>
            <button onClick={e => addToTime()}>Add Time</button>
            <button onClick={e => setToTime()}>Set Time</button>
        </div>
    )
}

export default panel