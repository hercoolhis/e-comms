import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";


const CartDropDown = ({cart_items}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cart_items.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
        
    </div>
)

const mapStateToProps = ({ cart: { cart_items }}) => ({
    cart_items
})

export default connect(mapStateToProps, null)(CartDropDown);