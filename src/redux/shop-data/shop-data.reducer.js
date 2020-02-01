
import shopDataTypes from "./shop-data.types";

const INITIAL_STATE = {
    collections: null
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case(shopDataTypes.UPDATE_COLLECTION):           
            return {
                ...state,
                collections: action.payload
            }
        default:
            
            return state;
   }
}

export default shopDataReducer;