import { useReducer, useState } from "react"
import timeReducer from "../Time/reducer/time"
import * as actionTypes from "../utils/actionTypes"

const useTime = (initialTime, initialCounter) => {
    const [time, timeDispatch] = useReducer(timeReducer, initialTime);
    const [counter, setCounter] = useState(initialCounter)

    const setTime = () => {
        timeDispatch({ type: actionTypes.SET_TIME })        
    }
    const addTime = () => {
        timeDispatch({ type: actionTypes.ADD_TIME })        
    }

    return {
        setTime,
        time,
        addTime,
        counter,
        setCounter
    }
}

export default useTime;