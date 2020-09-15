import { Button, CardActions, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import { calculateTotal } from 'helpers/calculateTotal';
import money from 'hooks/useMask/money';
import React, { useEffect, useState } from 'react';

import useStyles from './styles';

interface IProps {
  handleCheckout?: ()=> void;
}

function OrderSummary(props: IProps) {
  const [{ data }] = useShoppingCart();
  const classes = useStyles();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(calculateTotal(data));
  }, [data])

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
          onClick={props.handleCheckout && props.handleCheckout}
          variant="contained"
          color="primary"
          type="submit"
          disabled={data.length < 1}
          fullWidth
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}

export default OrderSummary;
