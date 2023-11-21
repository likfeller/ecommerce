import React from "react";

const ItemList = ({ addItemToCart }) => {
  const items = [
    { id: 1, name: "Item 1", price: 1200 },
    { id: 2, name: "Item 2", price: 1400 },
    { id: 3, name: "Item 3", price: 2200 },
    { id: 12, name: "Item 4", price: 3200 },
    { id: 4, name: "Item 5", price: 3000 },
    { id: 5, name: "Item 6", price: 3110 },
    { id: 6, name: "Item 7", price: 3220 },
    { id: 7, name: "Item 8", price: 3330 },
    { id: 8, name: "Item 9", price: 3440 },
    { id: 9, name: "Item 10", price: 3550 },
    { id: 10, name: "Item 11", price: 3660 },
    { id: 11, name: "Item 12", price: 3770 },
  ];

  return (
    <div>
      <h2 className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Item List
      </h2>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button
              onClick={() => addItemToCart(item)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
