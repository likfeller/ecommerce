
import React, { useState } from 'react';
import ItemList from './ItemList';
import ShoppingCart from './ShoppingCart';

const MainItems = () => {
  const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
      console.log('add', item)
    setCartItems([...cartItems, { ...item, cartId: Date.now() }]);
  };

    const removeItem = (cartId) => {
      console.log('removeItem', cartId)
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
  };

  return (
    <div>
      <h2>Item List</h2>
      <ItemList addItemToCart={addItem} />
      
      <h2>Shopping Cart</h2>
      <ShoppingCart cartItems={cartItems} removeItemFromCart={removeItem} />
    </div>
  );
};

export default MainItems;
