import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';

const  App = () => {
  return (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component= {HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
  </div>)
}

export default App;