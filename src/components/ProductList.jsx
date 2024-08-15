// src/components/ProductList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  // Ensure products is an array before using .map()
  if (!Array.isArray(products)) {
    console.error('Products is not an array:', products);
    return <p>Error: Products data is not an array.</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
