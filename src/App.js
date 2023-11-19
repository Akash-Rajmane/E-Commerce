import React, { useContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './pages/products/Products';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/cart-context';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Product from './pages/products/Product';
import AuthContext from './context/auth-context';

import Login from './pages/login/Login';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const {isLoggedIn} = useContext(AuthContext);

  const productsArr = [

    {
    
    id: 1,

    title: 'Hooded Sweat-shirt',
    
    price: 400,
    
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70',

    images : [
      "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zvaxuzcsg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70"
    ],

    details: [
      ["Color", "Black"],
      ["Fabric", "Cotton Fleece Blend"],
      ["Pattern", "Printed"]
    ],

    reviews: [
      {
        stars: 4,
        text: "Love It",
        buyer: "Ashish Patel"
      },
      {
        stars: 5,
        text: "Best In Quality",
        buyer: "Arif Mondal"
      },
      {
        stars: 5,
        text: "Good Product, Worth the price",
        buyer: "Sujay Raj"
      },
    ]

    
    },
    
    {
    
    id: 2,
    
    title: 'Logitech Mouse',
    
    price: 50,
    
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70',

    images: [
      "https://rukminim2.flixcart.com/image/832/832/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/korijrk0/mouse/w/y/s/b175-logitech-original-imag359vnxv7bf9k.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/korijrk0/mouse/p/h/9/b175-logitech-original-imag359van4hzuym.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/korijrk0/mouse/t/n/c/b175-logitech-original-imag359vsyt4zaz9.jpeg?q=70"
    ],

    details: [
      ["Color", "Black"],
      ["Bluetooth", "No"],
      ["Type", "Wired"]
    ],

    reviews: [
      {
        stars: 5,
        text: "Worth It",
        buyer: "Rahul Patel"
      },
      {
        stars: 4,
        text: "Best In Quality",
        buyer: "Ajay Singh"
      }
    ]

    
    },
    
    {
    
    id: 3,

    title: 'Sandisk Pendrive',
    
    price: 70,
    
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkthkjzhkv.jpeg?q=70',

    images : [
      "https://rukminim2.flixcart.com/image/832/832/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkthkjzhkv.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkrrvkpjxm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/l2hwwi80/pendrive/pendrive/t/e/p/sdcz50-032g-i35-cruzer-blade-sandisk-original-imagdtu7gkxqtret.jpeg?q=70"
    ],
    
    details: [
      ["Capacity", "8 GB"],
      ["Color", "Black Red"],
      ["Model", "Cruze Blade"]
    ],

    reviews: [
      {
        stars: 4,
        text: "Love It",
        buyer: "Ashish Patel"
      },
      {
        stars: 5,
        text: "Best In Quality",
        buyer: "Arif Mondal"
      }
    ]

    
    },
    
    {
    
    id: 4,

    title: 'Samsung Memory Card',
    
    price: 60,
    
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/kxz0pe80/memory-card/microsdxc/h/f/j/mb-mc512ka-in-samsung-original-imagab4yqxfsq5ec.jpeg?q=70',

    images : [
      "https://rukminim2.flixcart.com/image/832/832/kxz0pe80/memory-card/microsdxc/h/f/j/mb-mc512ka-in-samsung-original-imagab4yqxfsq5ec.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/kxz0pe80/memory-card/microsdxc/i/3/d/mb-mc512ka-in-samsung-original-imagab4yywezxsvc.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/kxz0pe80/memory-card/microsdxc/c/e/c/mb-mc512ka-in-samsung-original-imagab4yy32ggxgv.jpeg?q=70"
    ],

    details: [
      ["Capacity", "8 GB"],
      ["Color", "White"],
      ["Model", "Evo"]
    ],

    reviews: [  
    {
      stars: 5,
      text: "Awsome Product",
      buyer: "Kapil Sharma"
    },
      {
        stars: 4,
        text: "Love It",
        buyer: "Ashish Patel"
      },
      {
        stars: 5,
        text: "Best In Quality",
        buyer: "Arif Mondal"
      }
    ]
    
    }
    
    ];

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

    <CartContextProvider>
      <Header setIsCartShown={setIsCartShown}/>
      {isCartShown && isLoggedIn && <Cart setIsCartShown={setIsCartShown}/>} 
      <main style={{marginTop:"80px"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          {isLoggedIn && <Route path="/store" element={<Products products={productsArr}/>} />}
          {isLoggedIn && <Route path="/store/:productId" element={<Product products={productsArr}/>}/>}
          <Route path="/about" element={<About/>} />
          {!isLoggedIn && <Route path="/login" element={<Login/>}/>}
          {isLoggedIn && <Route path='/contact' element={<Contact addMessage={addMessageHandler}/>} />}
          <Route path="*" element={<Login/>}/>
        </Routes>
      </main>
    </CartContextProvider>
  
  );
}

export default App;
