const initialState = {
    isApproved: true
}

const reducer = (state = initialState, action) => {
    console.log("USERREDC reducer", state)    
    return state;
}

export default reducer;