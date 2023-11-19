import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/cart-context';

const Product = ({products}) => {
    const {addItem} = useContext(CartContext);
    const params = useParams();
    const product = products.find(el=>el.id===Number(params.productId));
    const [src,setSrc] = useState(product.imageUrl);
    const [hoveredImg,setHoveredImg] = useState(0);

    const addToCart = (el) => {
        let item = {
            ...el,
            quantity: 1,
            }
        
        addItem(item);
    }
    
  return (
    <div className='d-flex gap-4 m-2'>

        <div className='d-flex gap-4'>
            <div className='d-flex flex-column gap-2'>
                {product.images.map((img,id)=>{
                    return(
                        <img 
                            key={id}
                            src={img} 
                            alt="productImg"
                            style={{width:"100px", height:"100px"}} 
                            className={`border ${hoveredImg===id && "border-primary"}` }
                            onMouseOver={()=>{
                                setSrc(img);
                                setHoveredImg(id);
                            }}
                            />
                    )
                })}
            </div>
            <img
                src={src}
                alt="product"
                style={{
                    width:"350px", 
                    height:"500px"
                }}
                className="border"
            />  
        </div>

        <div className='w-100 m-2'>
            <h1 className='my-2'>{product.title}</h1>
            <h3 className='my-2'>${product.price}</h3>
            <div className='d-flex flex-column gap-2 mt-4 mb-4'>
                {product.details.map((el,id)=>{
                    return(
                        <span className='text-secondary' key={id}>
                            {el[0]} : {el[1]}
                        </span>
                    )
                })}
            </div>
            <button className='btn btn-primary mt-2 mb-4' onClick={()=>addToCart(product)}>Add To Cart</button>
            <div className='d-flex flex-column gap-2'>
                <h3>Reviews</h3>
                {product.reviews.map(el=>{
                    return(
                        <div className='bg-light d-flex flex-column' style={{paddingLeft:"20px"}} key={el.text}>
                            <h5>{el.text} <span style={{width:"60px", background:"green", color:"#fff", borderRadius:"8px", padding:"4px", fontSize:"12px"}}>{el.stars}⭐</span></h5>
                            <p className='text-secondary'>{el.buyer}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Product;

