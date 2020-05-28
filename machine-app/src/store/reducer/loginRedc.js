import * as actionTypes from "../action/actionTypes"

const initialState = {
    isLogin: false,
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.AUTHENTICATE) {
        console.log("double console log in reducer")
        return {
            ...state,
            isLogin: true            
        }
    } else if (action.type === actionTypes.INITIALIZE_USER) {
        return {
            
        }
    }
    return state;
}

export default reducer;