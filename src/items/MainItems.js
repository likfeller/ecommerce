import React, { useState } from 'react';
import ItemList from './ItemList';
import ShoppingCart from './ShoppingCart';

const MainItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    console.log('add', item);
    const updatedCartItems = [...cartItems, { ...item, cartId: Date.now() }];
    setCartItems(updatedCartItems);

    // Calculate the total amount
    const newTotalAmount = updatedCartItems.reduce((total, item) => total + item.price, 0);
    setTotalAmount(newTotalAmount);
  };

  const removeItem = (cartId) => {
    console.log('removeItem', cartId);
    const updatedCartItems = cartItems.filter(item => item.cartId !== cartId);
    setCartItems(updatedCartItems);

    // Recalculate the total amount after removing an item
    const newTotalAmount = updatedCartItems.reduce((total, item) => total + item.price, 0);
    setTotalAmount(newTotalAmount);
  };

  return (
    <div className="flex flex-col items-center justify-center">

      <ItemList addItemToCart={addItem} />


      <ShoppingCart cartItems={cartItems} removeItemFromCart={removeItem} totalAmount={totalAmount} />
    </div>
  );
};

export default MainItems;
