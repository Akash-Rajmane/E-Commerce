import React from 'react';

const Header = ({setIsCartShown}) => {
  return (
    <header className="position-fixed w-100 top-0 start-0 bg-dark text-white d-flex justify-content-around align-items-center gap-4" style={{height:"60px"}}>
        <nav className='d-flex justify-content-center align-items-center'>
            <ul className="d-flex align-items-center list-unstyled gap-4 mt-3 fs-5">
                <li className='mx-4'>Home</li>
                <li className='mx-4'>Store</li>
                <li className='mx-4'>About</li>
            </ul>
        </nav>
        <button className='btn btn-primary' onClick={()=>setIsCartShown(flag=>!flag)}>Cart</button>
    </header>
  )
}

export default Header;