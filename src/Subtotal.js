import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral'
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  //for the calculation part 
  const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  const number = getBasketTotal(basket);
  const formattedNumber = numeral(number).format('$0,0.00');
  return (
   
         <div className="subtotal">
      
            <p>
              Subtotal ( {basket.length} items): <strong>{formattedNumber}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a gift
            </small>

      <button onClick={e => navigate ('/payment')}>Proceed to Checkout</button>
    </div>
    
  )
}

export default Subtotal