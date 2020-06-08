import React from "react"
import useTime from "../../hooks/useTime"

const button = props => {
    const { time, addTime, setTime, counter, setCounter } = useTime(100, 200)    
    const addToTime = () => {
        addTime();
    }
    const setToTime = () => {
        setTime();
    }
    const addToCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }
    return (
        <div>
            <p>{time}</p>
            <p>{counter}</p>
            <button onClick={e => addToTime()}>Add Time</button>
            <button onClick={e => setToTime()}>Set Time</button>
            <button onClick={e => addToCounter()}>Add Counter</button>            
        </div>
    )
}

export default button