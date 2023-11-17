import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';


function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  return (
    <div className="App">
      <Header setIsCartShown={setIsCartShown}/>
      <Products/>
      {isCartShown && <Cart setIsCartShown={setIsCartShown}/>}
    </div>
  );
}

export default App;
