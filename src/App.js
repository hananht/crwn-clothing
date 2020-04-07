import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign/sign.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign' component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
