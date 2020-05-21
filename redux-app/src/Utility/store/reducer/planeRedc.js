const initialState = {
    engine: "X1-S",
    booster: "jet",
    price: 1200,
    use: "authorized"
}

const reducer = (state = initialState, action) => {
    if (action.type === "DISPLAY") {
        return {
            ...state,
            special: "delivery"
        };
    } else if (action.type === "ADD_PRICE") {
        console.log("PLANEREDC addPrice")
        return {
            ...state,
            price: state.price + action.value
        }
    } else if (action.type === "SUBTRACT_PRICE") {
        return {
            ...state,
            price: state.price - action.value
        }
    }
    return state;
}


export default reducer;

