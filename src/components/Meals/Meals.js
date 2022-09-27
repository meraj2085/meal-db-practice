import './Meals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Meals = ({handleAddToCard, meal}) => {
     const {strMeal, strInstructions, strMealThumb} = meal;
     return (
          <div>
               <div className='meal-card'>
               <img src={strMealThumb} alt="" />
               <div className='meal-details'>
                    <h6>{strMeal}</h6>
                    <p>{strInstructions.slice(0,125)}</p>
               </div>
               <button onClick={()=>{handleAddToCard(meal)}} className='cart-btn-container'>
                    <p className='cart-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
               </button>
          </div>
          </div>
     );
};

export default Meals;