// src/components/ProductItem.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice';
import { updateProduct, deleteProduct } from '../redux/slices/productsSlice';
import { toast } from 'react-toastify';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleEditProduct = () => {
    dispatch(updateProduct(editedProduct)).then(() => {
      setIsEditing(false);
      toast.success(`${editedProduct.name} updated successfully!`);
    });
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.id)).then(() => {
      toast.error(`${product.name} removed from products!`);
    });
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            className="input mb-2"
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
            className="input mb-2"
          />
          <textarea
            value={editedProduct.description}
            onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
            className="input mb-2"
          />
          <button onClick={handleEditProduct} className="btn bg-green-500 hover:bg-green-600">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="btn bg-red-500 hover:bg-red-600 ml-2">
            Cancel
          </button>
        </>
      ) : (
        <>
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4" />
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{product.name}</h3>
          <p className="text-sm md:text-base text-textSecondary mb-4">${product.price}</p>
          <p className="text-sm md:text-base text-textSecondary mb-4">{product.description}</p>
          <button className="btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn bg-yellow-500 hover:bg-yellow-600 ml-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="btn bg-red-500 hover:bg-red-600 ml-2" onClick={handleDeleteProduct}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ProductItem;
