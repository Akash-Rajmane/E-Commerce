import React from 'react';

const Cart = ({setIsCartShown}) => {
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ];

  return (
    <div className='position-fixed p-4 shadow rounded bg-white d-flex flex-column align-items-center gap-3' style={{top:"60px",right:"0"}}>
        <button className='btn btn-secondary position-absolute end-0 top-0' onClick={()=>setIsCartShown(false)}>X</button>
        <h3>CART</h3>
      <div className="row w-100">
        <div className='col-4'>Item</div>
        <div className='col-4'>Price</div>
        <div className='col-4'>Quantity</div>
      </div>
      {cartElements.map((el, index) => (
        <div key={index} className='row w-100 mb-3'>
          <div className='col-4 d-flex align-items-center'>
            <img src={el.imageUrl} className="rounded-4" style={{ width: "40px", height: "40px" }} alt="product" />
            <span className='ms-2'>{el.title}</span>
          </div>
          <div className='col-4 d-flex align-items-center'>
            ${el.price}
          </div>
          <div className='col-4 d-flex align-items-center'>
            <input defaultValue={el.quantity} className='form-control me-2' style={{ width: "35px", height: "35px" }} />
            <button className='btn btn-danger'>Remove</button>
          </div>
        </div>
      ))}
      <button className='btn btn-primary'>Purchase</button>
    </div>
  );
}

export default Cart;