import React, { useReducer } from "react"
import * as actionTypes from "../utils/actionTypes"
import hunterReducer from "../Hunter/reducer/hunter"

const useHunter = () => {
    const [hunter, dispatch] = useReducer(hunterReducer,
        [
            { name: "bloodborne", year: 2015 },
            { name: "dark souls", year: 2010 }
        ]
    )
    const addHunter = (h) => {
        dispatch({type: actionTypes.ADD_HUNTER, hunter: h})
    }
    return {
        hunter,
        addHunter
    }
}

export default useHunter