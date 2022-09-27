import React from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import Meals from '../Meals/Meals';

const Home = () => {
     return (
          <div className='home-container'>
               <div className='meals-container'>
                    <Meals></Meals>
               </div>
               <div className='selected-products'>
                    <Cart></Cart>
               </div>
          </div>
     );
};

export default Home;