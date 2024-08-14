// src/redux/slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://my-json-server.typicode.com/Shr3yasG/RestApi/products';

// Async Thunks for API calls
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Check if there are products in local storage
  const localData = JSON.parse(localStorage.getItem('products'));
  if (localData) {
    return localData;
  }

  // Fetch from API if local storage is empty
  const response = await fetch(API_URL);
  const data = await response.json();

  // Save the initial data to local storage
  localStorage.setItem('products', JSON.stringify(data));
  return data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product, { getState }) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await response.json();

  // Get current products from the state
  const currentProducts = getState().products.items;

  // Add the new product to the local state and save to local storage
  const updatedProducts = [...currentProducts, data];
  localStorage.setItem('products', JSON.stringify(updatedProducts));

  return data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (product, { getState }) => {
  const response = await fetch(`${API_URL}/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await response.json();

  // Update local storage
  const currentProducts = getState().products.items.map(p =>
    p.id === data.id ? data : p
  );
  localStorage.setItem('products', JSON.stringify(currentProducts));

  return data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, { getState }) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  // Update local storage
  const currentProducts = getState().products.items.filter(p => p.id !== id);
  localStorage.setItem('products', JSON.stringify(currentProducts));

  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
