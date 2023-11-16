
import React from 'react';

const ShoppingCart = ({ cartItems, removeItemFromCart }) => {
  return (
    <div>
      {cartItems.map(item => (
        <div key={item.cartId}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeItemFromCart(item.cartId)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
