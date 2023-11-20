import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

const Products = ({products}) => {
    const {addItem} = useContext(CartContext);
    const navigate = useNavigate();

    const addToCart = (el) => {
        let item = {
            id: el.id,
            imageUrl: el.imageUrl,
            price: el.price,
            title: el.title,
            quantity: 1,
        }
        
        addItem(item);
    }

  return (
    <ul className="row list-unstyled m-4 p-4">
        {products.map(el=>{
            return(
                <li className="col-md-6 col-sm-12 mb-4" key={el.id}>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        <span onClick={()=>navigate(`/store/${el.id}`)}>{el.title}</span>
                        <img src={el.imageUrl} alt="product" onClick={()=>navigate(`/store/${el.id}`)} style={{width:"250px", height:"250px"}} className='border'/>
                        <div className='d-flex gap-3 justify-content-center align-items-center'>
                            <span>${el.price}</span>
                            <button className='btn btn-primary' onClick={()=>addToCart(el)}>Add to cart</button>
                        </div>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default Products;
