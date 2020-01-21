import React from 'react';
import { connect } from "react-redux";
import { removeItem, reduceItemQuantity, addItem } from "../../redux/cart/cart.action";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem , removeItem, reduceItemQuantity, addItem  }) => {
  const {id, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div onClick={() => reduceItemQuantity(id)} className="arrow">&#10094;</div>
            <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div onClick={ () => removeItem(id)} className='remove-button'>&#10005;</div>
  </div>
  ); 
} 
  


const dispatchMapToProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)),
    reduceItemQuantity: (item) => dispatch(reduceItemQuantity(item)),
    addItem: (item) => dispatch(addItem(item))
})
 

export default connect(null, dispatchMapToProps)(CheckoutItem);