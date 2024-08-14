import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
