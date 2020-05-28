import * as actionTypes from "../action/actionTypes"
const initialState = {
    games: null
}

const reducer = (state = initialState, action) => {
    console.log("GAMEREDC reducer")
    if (action.type === actionTypes.GET_GAMES) {
        return {
            games: action.games
        }
    } else if (action.type === actionTypes.LOGIN) {
        console.log("GAMEREDC type=login")
    }
    // else if (action.type === actionTypes.ADD_GAME) {
    //     if (!state.games) {
    //         const games = [];
    //         games.push(action.data)
    //         return {
    //             games: games
    //         }
    //     } else {
    //         return {
    //             games: state.games.concat(action.data)
    //         }
    //     }
    // }
    return state
}

export default reducer;