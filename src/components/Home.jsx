
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, CardActions, Button, CircularProgress } from '@mui/material';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";


const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          toast.error("error in server")
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
    
      <Container>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  const handleDelete = (id) => {
    const deletedProduct = products.find(product => product.id === id);
    setProducts(products.filter(product => product.id !== id));
    toast.error(deletedProduct.title + " deleted");
  };


  return (<>
  <Header/> 
    <Container >  <ToastContainer />
      <h2 className='text text-light p-4 mb-4'>Products</h2>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className='card'>
              <CardMedia className='img'
                component="img"
                height="150"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography className="h5" component="div">
                  {product.title}
                </Typography>
                <Typography className="body1" color="text.primary">
                  Price: ${product.price}
                </Typography>
                <Typography className="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <i onClick={() => handleDelete(product.id)} className="fa-solid fa-trash" title='Delete Product'></i>              
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
          <Footer/>
          </>
  );
};

export default Home;
