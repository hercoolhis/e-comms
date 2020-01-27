import SHOP_DATA from "../../pages/shoppage/shop.data";

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch (action) {
        default:
            return state;
   }
}

export default shopDataReducer;