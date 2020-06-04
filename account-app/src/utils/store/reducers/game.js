import * as actionTypes from "../actions/actionTypes"
const intialState = {
    name: "Android"
}

const reducer = (state = intialState, action) => {
    if (action.type === actionTypes.INITIALIZE_GAME) {
        console.log(actionTypes.INITIALIZE_GAME)
        return {
            name: action.name
        }    
    } else if (action.type === actionTypes.FINAL_SETUP) {
        console.log(action.description)
        console.log(actionTypes.FINAL_SETUP)
        return {
            name: state.name + " " + action.description
        }

    }
    return state;
}

export default reducer;