import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import { NavLink } from 'react-router-dom';

const Header = ({setIsCartShown}) => {
  const {items} = useContext(CartContext);
  

  const totalCartItems = items.reduce((total,curr)=>{
    return total + Number(curr.quantity);
  },0);


  return (
    <header className="position-fixed w-100 top-0 start-0 bg-dark text-white d-flex justify-content-around align-items-center gap-4" style={{height:"60px", zIndex:"10"}}>
        <nav className='d-flex justify-content-center align-items-center'>
            <ul className="d-flex align-items-center list-unstyled gap-4 mt-3 fs-5">
                <li className='mx-4'><NavLink to="/" className="text-decoration-none" style={({isActive}) => isActive ? {color:"dodgerblue"} : {color:"#fff"}}>Home</NavLink></li>
                <li className='mx-4'><NavLink to="/store" className="text-decoration-none"  style={({isActive}) => isActive ? {color:"dodgerblue"} : {color:"#fff"}}>Store</NavLink></li>
                <li className='mx-4'><NavLink to="about" className="text-decoration-none"  style={({isActive}) => isActive ? {color:"dodgerblue"} : {color:"#fff"}}>About Us</NavLink></li>
            </ul>
        </nav>
        <button className='btn btn-primary d-flex gap-2' onClick={()=>setIsCartShown(flag=>!flag)}><span>Cart</span><span>{totalCartItems}</span></button>
    </header>
  )
}

export default Header;