// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {Array.isArray(products) ? (
          products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <Link to={`/edit-product/${product.id}`}>Edit</Link>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
