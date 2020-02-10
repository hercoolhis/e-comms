import UserActionTypes from "./user.types";


export const startEmailSignIn = user => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: user
    }
}

export const emailSignInSuccess = user => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
        payload: user
    }
}

export const emailSignInFailure = error => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
        payload: error
    }
}


export const startGoogleSignIn = () => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START
    }
}

export const googleSignInSuccess = user => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
        payload: user
    }
}

export const googleSignInFailure = error => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
        payload: error
    }
}

export const startUserSignOut = () => {
    return {
        type: UserActionTypes.SIGN_OUT_START
   }
}

export const signOutSuccess = () => {
    return {
        type: UserActionTypes.SIGN_OUT_SUCCESS
    }
}

export const signOutFailure = error => {
    return {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error
    }
}

export const startUserSignUp = user => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: user
   }
}

export const signUpSuccess = () => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS
    }
}

export const signUpFailure = error => {
    return {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
}