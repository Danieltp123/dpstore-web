import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CreditCard from 'components/CreditCard';
import React from 'react';

import useStyles from './styles';

function OrderInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={6}>
      <CardHeader title="Informação de envio" />
      <CardContent>
        <Typography>
          Daniel Patricio, +55 (83) 99822-5759<br />
          Avenida Sapé, 737<br />
          Apto. 2201 B<br />
          Joao Pessoa, Paraiba, Brazil, 58038381
        </Typography>
      </CardContent>
      <CardHeader data-cy="payment-title" title="Pagamento" />
      <CardContent>
        <CreditCard />
      </CardContent>
    </Card>
  );
}

export default OrderInfo;
