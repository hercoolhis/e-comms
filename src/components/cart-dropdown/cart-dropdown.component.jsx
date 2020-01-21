import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartDropDown = ({cart_items, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cart_items.length ?
                    cart_items.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
                :
                <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            } 
        }>
                Go To Checkout
        </CustomButton>
        
    </div>
)

const mapStateToProps = (state) => ({
    cart_items: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps, null)(CartDropDown));