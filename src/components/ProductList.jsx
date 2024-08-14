import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products.items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
