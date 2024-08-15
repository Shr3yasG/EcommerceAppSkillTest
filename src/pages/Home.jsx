import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../redux/slices/productsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
