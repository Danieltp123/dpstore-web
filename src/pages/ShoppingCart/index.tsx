import Grid from '@material-ui/core/Grid';
import OrderSummary from 'components/OrderSummary';
import ShoppingCartComponent from 'components/ShoppingCart';
import Layout from 'layout';
import React from 'react';

function ShoppingCart() {

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <ShoppingCartComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ShoppingCart;
