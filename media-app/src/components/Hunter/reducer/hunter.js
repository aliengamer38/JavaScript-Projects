import * as actionTypes from "../../utils/actionTypes"

const hunterReducer = (currentState, action) => {
    if (action.type === actionTypes.RESET_HUNTER) {
        return []
    } else if (action.type === actionTypes.ADD_HUNTER) {
        return [...currentState, action.hunter]
    }
    else {
        throw new Error("Error processing!")
    }
}

export default hunterReducer;