import React from 'react';

const Home = () => {
  return (
    <>
        <div className='bg-secondary p-4' style={{marginTop:"-30px"}}> 
            <h1 className='text-center text-white font-weight-bold' style={{fontSize:"95px"}}>The Generics</h1>
        </div>
        <h1 className='text-center'>Welcome To E-Commmerce</h1>
        <div className='mt-3'>
          <h3 className='text-center font-weight-bold'>TOURS</h3>
          <ul className='list-unstyled'>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>JUL 16</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>JUL 19</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>JUL 22</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>JUL 29</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>AUG 2</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
            <li className='d-flex justify-content-center align-items-center gap-4 p-2' style={{borderBottom: "2px solid #000", width:"600px", margin: "auto"}}>
              <span>AUG 7</span>
              <span className='text-secondary'>DETROIT, MI</span>
              <span className='text-secondary'>DTE ENERGY MUSIC THEATRE</span>
              <button className='btn btn-info text-white'>BUY TICKETS</button>
            </li>
          </ul>
        </div>
        <div className='bg-info p-4 position-relative bottom-0 start-0 w-100'>
            <h1 className='text-start text-white font-weight-bold ' style={{marginLeft:"200px"}}>The Generics</h1>
        </div>
 
    </>
  )
}

export default Home;