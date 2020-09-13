import Checkout from 'pages/Checkout';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import ShoppingCart from 'pages/ShoppingCart';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Pages(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalhes/:id" component={ProductDetails} />
      <Route exact path="/carrinho" component={ShoppingCart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={():JSX.Element => <Redirect to="/" />} />
    </Switch>
  );
}
