import { takeEvery } from "redux-saga/effects";
import gameSaga from "./game";
import * as actionTypes from "../store/actions/actionTypes";

export function* watchGame() {
	yield takeEvery(actionTypes.INITIALIZE_GAME, gameSaga);
}


