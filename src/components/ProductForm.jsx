// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
          setName(response.data.name);
          setPrice(response.data.price);
        })
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price };

    if (id) {
      axios.put(`http://localhost:3000/products/${id}`, product)
        .then(navigate('/home'))
        .catch(error => console.error('Error updating product:', error));
    } else {
      axios.post(`http://localhost:3000/products`, product)
        .then(navigate('/home'))
        .catch(error => console.error('Error adding product:', error));
    }
  };

  return (
    <div>
      <h3>{id ? 'Edit' : 'Add'} Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
