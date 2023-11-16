
import React from 'react';

const ItemList = ({ addItemToCart }) => {
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 15 },
    { id: 4, name: 'Item 4', price: 25 },
  ];

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => addItemToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;