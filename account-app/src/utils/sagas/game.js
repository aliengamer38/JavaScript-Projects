import { put, delay } from "redux-saga/effects"
import * as actionTypes from "../store/actions/actionTypes"

function* gameSaga(action) {                
    yield put({
        type: actionTypes.FINAL_SETUP,
        description: action.description
    })
}

export default gameSaga;