import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import Meals from '../Meals/Meals';

const Home = () => {
     const [meals, setMeals] = useState([])
     useEffect(()=>{
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
          .then(res => res.json())
          .then(data => setMeals(data.meals))
     },[])

     //=======================================//===============================//
     const [cart, setCart] = useState([])


     const handleAddToCard = (meal) =>{
          const newCart = [...cart, meal];
          setCart(newCart)
     }
     

     return (
          <div className='home-container'>
               <div className='meals-container'>
                    {
                         meals.map(meal => <Meals meal={meal} key={meal.idMeal} handleAddToCard={handleAddToCard}></Meals>)
                    }
               </div>
               <div className='selected-products'>
                    <Cart cart={cart}></Cart>
               </div>
          </div>
     );
};

export default Home;