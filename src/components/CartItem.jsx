import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <button 
        className="text-red-500 hover:text-red-700"
        onClick={() => dispatch(removeItemFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
