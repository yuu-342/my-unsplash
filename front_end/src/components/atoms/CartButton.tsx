import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'assets/css/components/atoms/CartButton.css';

const CartButton = () => {
  return (
    <div className='cart-button'>
      <FontAwesomeIcon icon={faShoppingCart} className='icon' size="lg"/>
    </div>
  )
};

export default  CartButton;