import * as actionTypes from "../action/actionTypes"

const initialState = {
    expirationDate: {value: new Date(), canChanged: true},
    expireIn: null 
}

const expiresIn = (expirationDate) => {
    console.log(expirationDate)
    console.log(new Date());
    const diffDate = expirationDate - new Date()
    console.log(expirationDate)
    console.log(diffDate)
    return diffDate;
}

const stringToDate = (strDate) => {
    const dateArr = strDate.split("-");
    const date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])    
    return date;
}
const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.START_TIME) {
        console.log(action.value)
        return {
            ...state,
            expireIn: expiresIn(state.expirationDate.value)
        }
    } else if (action.type === actionTypes.EXPIRES_CHANGE) {
        return {
            ...state,
            expirationDate: {...state.expirationDate, value: stringToDate(action.value)}
        }
    }
    return state
}

export default reducer