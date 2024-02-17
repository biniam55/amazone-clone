import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  //for the calculation part 
  const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  return (
   
         <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => navigate ('/payment')}>Proceed to Checkout</button>
    </div>
    
  )
}

export default Subtotal