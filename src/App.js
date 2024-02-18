import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51OcB7FGB1MweLZTVi2qsVsMRxWzeRY3C7CS74SfeTajSCemyHzh155Lr116Ragr9IXcw9zrFSwvtkmnTXy5FTB3i00WkHkk16u"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/checkout" element={<><Header/><Checkout /></>} />
        <Route path="/orders" element={<><Header/><Orders/></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={
            <>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </>
            } 
            
            />
        <Route path="/" element={<><Header/><Home /></>} />
      </Routes>
    </div>
    </Router>
  );
}


export default App;

