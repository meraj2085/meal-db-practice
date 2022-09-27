import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
     console.log(cart)
     return (
          <div className='cart-container'>
               <p className='cart-header'>Order Summary</p>
               <p className='selected-total'>Total Selected: {cart.length}</p>
               <ol className='selected-products-list'>
                    {
                         cart.map(product => <li>{product.strMeal}</li>)
                    }
               </ol>
          </div>
     );
};

export default Cart;