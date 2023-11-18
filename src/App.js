import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './pages/products/Products';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/cart-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  return (
    <Router>
    <CartContextProvider>
      <Header setIsCartShown={setIsCartShown}/>
      {isCartShown && <Cart setIsCartShown={setIsCartShown}/>} 
      <main style={{marginTop:"80px"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/store" element={<Products/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
      
    </CartContextProvider>
    </Router>
  );
}

export default App;
