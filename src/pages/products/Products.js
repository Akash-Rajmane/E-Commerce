import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';

const Products = () => {
    const {addItem} = useContext(CartContext);

    const productsArr = [

        {
        
        id: 1,

        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        id: 2,
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        id: 3,

        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        id: 4,

        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];

        const addToCart = (el) => {
            let item = {
                ...el,
                quantity: 1,
              }
          
            addItem(item);
        }

  return (
    <ul className="row list-unstyled m-4 p-4">
        {productsArr.map(el=>{
            return(
                <li className="col-md-6 col-sm-12 mb-4" key={el.id}>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        <span>{el.title}</span>
                        <img src={el.imageUrl} alt="product"/>
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
