import { Button, CardActions, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import { calculateTotal } from 'helpers/calculateTotal';
import money from 'hooks/useMask/money';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

function OrderSummary() {
  const [productsInCart] = useShoppingCart();
  const classes = useStyles();
  const history = useHistory();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(calculateTotal(productsInCart));
  }, [productsInCart])

  const handleCheckout = () => {
    history.push('/checkout');
  }

  return (
    <Card className={classes.card} elevation={6}>
      <CardHeader title="Sumário do Pedido" />
      <CardContent>
        <Typography className={classes.spaceBetween}>
          <span>Subtotal:</span><span>{money.apply(total)}</span>
        </Typography>
        <Typography className={classes.spaceBetween}>
          <span>Envio:</span><span>{money.apply(0)}</span>
        </Typography>
        <Divider />
        <Typography className={classes.spaceBetween} variant="h6">
          <span>Total:</span><span>{money.apply(total)}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleCheckout}
          variant="contained"
          color="primary"
          disabled={productsInCart.length < 1}
          fullWidth
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}

export default OrderSummary;
