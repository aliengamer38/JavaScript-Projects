export const APPEND_PROP = "APPEND_PROP"
export const INCREMENT = "INCREMENT"
export const ADD_PRICE = "ADD_PRICE"
export const SUBTRACT_PRICE = "SUBTRACT_PRICE"

export const appendProp = () => {
    return {
        type: APPEND_PROP
    }
}
export const increment = () => {
    return {
        type: INCREMENT
    }
}

const addPriceDispatch = (value) => {
    return {
        type: "ADD_PRICE",
        value: value
    }
}
export const addPrice = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addPriceDispatch(value))
        }, 2000)
    }    
}
const subtractPriceDispatch = (value) => {
    return {
        type: "SUBTRACT_PRICE",
        value: value
    }
}
export const subtractPrice = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(subtractPriceDispatch(value))
        }, 2000)
    }
}