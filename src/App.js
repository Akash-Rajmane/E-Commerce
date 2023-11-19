import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './pages/products/Products';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/cart-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  async function addMessageHandler(msg) {
    const response = await fetch('https://e-com-b68c7-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json',{
      method:'POST',
      body: JSON.stringify(msg),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    console.log(data);
  }
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
          <Route path='/contact' element={<Contact addMessage={addMessageHandler}/>} />
        </Routes>
      </main>
      
    </CartContextProvider>
    </Router>
  );
}

export default App;
