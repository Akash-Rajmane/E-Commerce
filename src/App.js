import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/cart-context';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  return (
    <CartContextProvider>
      <Header setIsCartShown={setIsCartShown}/>
      <main style={{marginTop:"80px"}}>
      <Products/>
      {isCartShown && <Cart setIsCartShown={setIsCartShown}/>}
      </main>
      
    </CartContextProvider>
  );
}

export default App;
