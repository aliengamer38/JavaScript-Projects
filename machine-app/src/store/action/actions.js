import axios from "axios"
import * as actionTypes from "./actionTypes"

const getGameDispatch = (data) => {
    return {
        type: actionTypes.GET_GAMES,
        games: data
    }
}

const getGameData = (dispatch) => {
    axios.get("https://burger-app-3fd69.firebaseio.com/machines.json").then(
        (res) => {
            const keys = Object.keys(res.data);
            let data = [];
            if (keys.length > 0) {
                data = keys.map(k => {
                    return res.data[k];
                })
            }
            dispatch(getGameDispatch(data));                
        }
    )
}


export const getGame = () => {
    return getGameData;
}

export const addGame = (data) => {
    console.log("ACTIONS addGame")
    // callback function should contain async code
    return (dispatch) => {
        axios.post("https://burger-app-3fd69.firebaseio.com/machines.json", data).then(
            (res) => {
                getGameData(dispatch);
            }
        )        
    }
}

