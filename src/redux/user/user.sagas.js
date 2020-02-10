import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure, startEmailSignIn, signUpFailure } from "./user.action";





export function* signInWithEmail({payload: {email, password}}) {
   try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);

    const userRef = yield call(createUserProfileDocument, user);

    const userSnapShot = yield userRef.get();

    yield put(
        emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data()})
    )
   } catch (error) {
       yield put(emailSignInFailure(error));
   }
    
}

export function* signUserOut() {
    try {
        
        yield auth.signOut();
        
        yield put(
            signOutSuccess()
        )
    } catch (error) {
        yield put(
            signOutFailure(error)
        )
    }
}

export function* signUserUp({payload: {email, password}}) {
    try {
        yield auth.createUserWithEmailAndPassword(email, password);

        yield put(
            startEmailSignIn({email, password})
        )
    } catch (error) {
        yield put(
            signUpFailure(error)
        )
    }
    
}



export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signUserOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUserUp)
}


export default function* userSaga() {
    yield all([call(onEmailSignInStart), call(onSignOutStart), call(onSignUpStart)]);
}