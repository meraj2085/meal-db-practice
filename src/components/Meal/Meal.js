import React from 'react';
import './Meal.css'

const Meal = (props) => {
     const {idMeal, strMeal, strInstructions, strMealThumb} = props.meal;
     return (
          <div className='meal-card'>
               <img src={strMealThumb} alt="" />
               <div className='meal-details'>
                    <h6>{strMeal}</h6>
                    <p>{strInstructions.slice(0,125)}</p>
               </div>
               <button className='cart-btn-container'>
                    <p className='cart-btn'>Add To Cart</p>
               </button>
          </div>
     );
};

export default Meal;