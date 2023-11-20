
import React from 'react';

const ShoppingCart = ({ cartItems, removeItemFromCart, totalAmount }) => {
  return (
    <div className="shopping-cart-container">
      <h2 className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        ShoppingCart
      </h2>
      <div className="shopping-cart-content">
        {cartItems.map(item => (
          <div key={item.cartId} className="shopping-cart-item">
            <p className="text-red">{item.name} - ${item.price}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => removeItemFromCart(item.cartId)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 text-red">
          <p className="font-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    
  );
};

export default ShoppingCart;
