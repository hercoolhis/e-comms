
import shopDataTypes from "./shop-data.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopDataReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case(shopDataTypes.FETCH_COLLECTION_START):           
            return {
                ...state,
                isFetching: true
            }
        case(shopDataTypes.FETCH_COLLECTION_SUCCESS):
            console.log(payload);
            return {
                ...state,
                isFetching: false,
                collections: payload
            }
        case(shopDataTypes.FETCH_COLLECTION_FAILURE):
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            
            return state;
   }
}

export default shopDataReducer;