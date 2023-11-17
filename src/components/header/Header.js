import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white d-flex justify-content-evenly align-items-center" style={{height:"60px"}}>
        <nav>
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled gap-4">
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
            </ul>
        </nav>
        <button className='btn btn-primary'>Cart</button>
    </header>
  )
}

export default Header;