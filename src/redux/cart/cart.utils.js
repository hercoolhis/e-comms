export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(
            cartItem => {
                if (cartItem.id === itemToAdd.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                } else {
                    return cartItem;
                }
            }
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, ItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== ItemToRemove);
}

export const reduceItemQuantity = (cartItems, itemToReduce) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToReduce);

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToReduce);
    }

    return cartItems.map(
        cartItem => 
            (cartItem.id === itemToReduce) ?
            { ...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
        
    )
}