import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";


const CartIcon = ({ toggleCartHidden }) => (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count"></span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);