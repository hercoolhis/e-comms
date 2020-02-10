import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearUserCart() {
    yield put(clearCart())
}



export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, clearUserCart)
}

export default function* cartSaga() {
    yield all([call(onSignOutSuccess)]);
}