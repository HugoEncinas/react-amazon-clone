import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import './App.css';

const stripePublicKey = 'pk_test_51HRnYSK9utNpep0D2RMlqmoMgkucDVXVm30I09oesAwdROAgiP8ttzOhETIqOB7z6UGjEukRGCCkq8FMqrEKrtsw009RvjGvvz'
const promise =  loadStripe(stripePublicKey);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        console.log('user:', authUser);

        if (authUser) {
          // user logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // user logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
