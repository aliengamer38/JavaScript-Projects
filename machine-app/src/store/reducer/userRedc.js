const initialState = {
    users: [
        "Pam", "Ram", "Lam"
    ]
}

const reducer = (state = initialState, action) => {
    console.log("USERSREDC reducer")
    return state;
}

export default reducer