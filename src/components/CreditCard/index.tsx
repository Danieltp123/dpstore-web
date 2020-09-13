import { Grid, TextField } from '@material-ui/core';
import React from 'react';

// import useStyles from './styles';

function CreditCard() {
  // const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField label="NÚMERO DO CARTÃO" />
      </Grid>
      <Grid item xs={8} md={7}>
        <TextField label="TITULAR DO CARTÃO" />
      </Grid>
      <Grid item xs={4} md={5}>
        <TextField label="EXPIRA" />
      </Grid>
      <Grid item xs={3}>
        <TextField label="CVV" />
      </Grid>
    </Grid>
  );
}

export default CreditCard;
