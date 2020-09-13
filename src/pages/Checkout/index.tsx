import Grid from '@material-ui/core/Grid';
import OrderInfo from 'components/OrderInfo';
import OrderSummary from 'components/OrderSummary';
import Layout from 'layout';
import React from 'react';

function ShoppingCart() {

  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12} md={5}>
          <OrderInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ShoppingCart;
