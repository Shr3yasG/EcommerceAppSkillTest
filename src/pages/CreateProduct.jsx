// src/pages/CreateProduct.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/productsSlice';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product)).then(() => {
      toast.success(`${product.name} has been added successfully!`);
      setProduct({ name: '', price: '', description: '', image: '' });
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Product Name" 
          className="input"
          value={product.name} 
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Price" 
          className="input"
          value={product.price} 
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          className="input"
          value={product.image} 
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <textarea 
          placeholder="Description" 
          className="input"
          value={product.description} 
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
        <button 
          type="submit"
          className="btn bg-green-500 hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
