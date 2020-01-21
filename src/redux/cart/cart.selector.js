import { createSelector } from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cart_items);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cart_items => cart_items.reduce((accummulatedValue, cartItem) => accummulatedValue + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cart_items => cart_items.reduce((accummulatedValue, cartItem) => accummulatedValue + cartItem.quantity * cartItem.price, 0)
)