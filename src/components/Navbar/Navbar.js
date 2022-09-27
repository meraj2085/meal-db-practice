import React from 'react';
import './Navbar.css'
const Navbar = () => {
     return (
          <div className='nav-container'>
               <h2 className='nav-title'>Meal <span style={{color: 'orange'}}>DB</span></h2>
               <div className='nav-'>
                    <a href="./home">Home</a>
                    <a href="./about">About</a>
                    <a href="./contact">Contact</a>
               </div>
          </div>
     );
};

export default Navbar;