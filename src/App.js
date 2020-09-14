import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import './App.css';

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
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
