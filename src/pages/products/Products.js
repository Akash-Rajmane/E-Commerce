import React, { useCallback, useContext, useEffect, useState } from 'react';
import CartContext from '../../context/cart-context';
import { ThreeDots } from 'react-loader-spinner';

const Products = () => {
    const {addItem} = useContext(CartContext);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = useCallback(async ()=>{
        setIsLoading(true);
        setError(null);
        try{
            const response = await fetch("https://swapi.dev/api/films/");

            if(!response.ok){
                throw new Error("Something went wrong");
            }
        
            const result = await response.json();

           
            const transformedMovies = result.results.map(el=>{
                return {
                    id: el.episode_id,
                    title: el.title,
                    openingText : el.opening_crawl,
                    releaseDate: el.release_date
                }
            })
            setMovies(transformedMovies);
           
        }catch(err){
            setError(err.message);
        }
        setIsLoading(false);
    },[])
    
    useEffect(()=>{
        fetchMovies();   
    },[])

    

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
    <ul className="list-unstyled m-4 p-4 d-flex justify-content-center align-items-center flex-column">
    {isLoading && 
        <ThreeDots  
            height="80" 
            width="80" 
            radius="9"
            color="#1e90ff" 
            ariaLabel="three-dots-loading"
            visible={true}
        />}
     {error && !isLoading && <p>{error}</p>}
     {!isLoading &&
        movies.map(el=>{
            return(
                <li key={el.id}>
                    {el.title}
                </li>
            )
        })
    }

        {/* {productsArr.map(el=>{
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
        })} */}
    </ul>
  )
}

export default Products;
