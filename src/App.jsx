import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
