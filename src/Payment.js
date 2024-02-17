import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from "./firebase";
function Payment() {
    const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const navigate=useNavigate();
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Send a request to server to get client secret from Stripe
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            //Extract client secret from response and set it in state
            setClientSecret(response.data.clientSecret)
        }
            // Call getClientSecret function when component mounts or when basket changes
        getClientSecret();
    }, [basket])
    console.log('THE SECRET IS >>>', clientSecret)
    // console.log('👱', user)
   
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);
            // Confirm the card payment using Stripe's API
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
           // If payment is successful
        }).then(({ paymentIntent }) => {
           
            
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            navigate('/orders')
            dispatch({
                type: 'EMPTY_BASKET'
            })
        })

    }
    const handleChange= (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
    <div className='payment'>
        <div className='payment__container'>
        <h1>
                 Checkout (
                     <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                 </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>  
            </div>
            <div className='payment__section'>
            <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
            </div>
            <div className='payment__section'>
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                 {/* Errors */}
                                 {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment