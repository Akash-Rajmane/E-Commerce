import React, { useContext, useRef } from 'react';
import CartContext from '../../context/cart-context';
import Input from '../input/Input';

const Cart = ({setIsCartShown}) => {
  const {items,removeEntireItem,removeAllItems,totalAmount} = useContext(CartContext);
  const quantityRef = useRef();
 
  const removeFromCart = (id) => {
    removeEntireItem(id);
  }

  const purchaseItemsFromCart = () => {
    if(items.length===0){
      alert("Cart is Empty");
      return;
    }
    console.log(quantityRef.current.value);
    alert("Your purchase is successful.");
    removeAllItems();
  }

  return (
    <div className='position-fixed p-4 shadow rounded bg-white d-flex flex-column align-items-center gap-3' style={{top:"60px",right:"0", width:"500px"}}>
        <button className='btn btn-secondary position-absolute end-0 top-0' onClick={()=>setIsCartShown(false)}>X</button>
        <h3>CART</h3>
      <div className="row w-100">
        <div className='col-4'>Item</div>
        <div className='col-4'>Price</div>
        <div className='col-4'>Quantity</div>
      </div>
      {items.map((el) => (
        <div key={el.id} className='row w-100 mb-3'>
          <div className='col-4 d-flex align-items-center'>
            <img src={el.imageUrl} className="rounded-4" style={{ width: "40px", height: "40px" }} alt="product" />
            <span className='ms-2'>{el.title}</span>
          </div>
          <div className='col-4 d-flex align-items-center'>
            ${el.price}
          </div>
          <div className='col-4 d-flex align-items-center'>
            <Input value={el.quantity} className='form-control me-2' style={{ width: "55px", height: "35px" }} type={"number"}/>
            <button className='btn btn-danger' onClick={()=>removeFromCart(el.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h4>Total: ${totalAmount}</h4>
      <button className='btn btn-primary' onClick={purchaseItemsFromCart}>Purchase</button>
    </div>
  );
}

export default Cart;