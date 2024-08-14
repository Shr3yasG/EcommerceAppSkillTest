import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector(state => state.products.items.find(p => p.id === parseInt(productId)));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="h-60 w-full object-cover mb-4" />
      <p className="text-gray-600 mb-4">${product.price}</p>
      <p className="text-gray-800">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
