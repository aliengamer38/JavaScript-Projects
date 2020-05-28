import * as actionTypes from "../action/actionTypes"
const initialState = {
    isLogin: false,
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {    
    console.log("AUTHREDC reducer")
    if (action.type === actionTypes.LOGIN) {        
        console.log("AUTHREDC type=login")
        return {
            isLogin: !state.isLogin
        }
    } else if (action.type === actionTypes.AUTHENTICATE) {
        console.log("double console log in reducer")
    } 
    return state;
}

export default reducer;