import * as actionTypes from "../../utils/actionTypes"

const timeReducer = (currentTime, action) => {
    if (action.type === actionTypes.SET_TIME) {
        return 10;
    } else if (action.type === actionTypes.ADD_TIME) {
        return currentTime + 1;
    }
    throw new Error("Action is not possible")
}

export default timeReducer