import { Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemCart from 'components/Product/ListItemCart';
import React, { memo } from 'react';

import { useShoppingCart } from './Context';
import useStyles from './styles';

const ShoppingCart = memo(function ShoppingCart() {
  const [{ data }] = useShoppingCart();
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={6}>
      <CardHeader title="Carrinho" />
      <CardContent>
        {data.length > 0 ?
        (
          <List>
            <Divider />
            {data.map(product => (
              <div key={product._id}>
                <ListItemCart product={product} />
                <Divider />
              </div>
            ))}
          </List>
        ):(
          <Box>
            <Typography align="center">
              <ShoppingCartIcon fontSize="large"/><br/>
              O seu carrinho está vazio<br/>
            </Typography>
          </Box>
        )
        }
      </CardContent>
    </Card> 
  );
})

export default ShoppingCart;
