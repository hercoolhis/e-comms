import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    current_user: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                current_user: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                current_user: null,
                error: null
            }
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,               
                error: action.payload
            }
           
    
        default:
            return state;
            
    }
}

export default userReducer;