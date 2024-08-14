import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItemCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold text-gray-800">Ecommerce App</div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
        <li><Link to="/cart" className="text-gray-600 hover:text-gray-800">Cart ({cartItemCount})</Link></li>
        <li><Link to="/create" className="text-gray-600 hover:text-gray-800">Add Product</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
