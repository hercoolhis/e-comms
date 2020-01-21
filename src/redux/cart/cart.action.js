import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN        
    }
}

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item_id) => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item_id
    }
}

export const reduceItemQuantity = (item_id) => {
    return {
        type: CartActionTypes.REDUCE_ITEM_QUANTITY,
        payload: item_id
    }
}