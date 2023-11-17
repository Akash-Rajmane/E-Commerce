import React from 'react';

const Products = () => {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
  return (
    <ul className="row list-unstyled m-4 p-4">
        {productsArr.map(el=>{
            return(
                <li className="col-md-6 col-sm-12 mb-4">
                    <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        <span>{el.title}</span>
                        <img src={el.imageUrl} alt="product"/>
                        <div className='d-flex gap-3 justify-content-center align-items-center'>
                            <span>${el.price}</span>
                            <button className='btn btn-primary'>Add to cart</button>
                        </div>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default Products;
