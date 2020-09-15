import { Grid } from '@material-ui/core';
import TextField from 'components/Fields/Text';
import { useFormikContext } from 'formik';
import { Values } from 'pages/Checkout';
import React from 'react';

function CreditCard() {
  const formik = useFormikContext<Values>();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label="NÚMERO DO CARTÃO"
          name="creditCard"
          mask="creditCard"
          formik={formik}
        />
      </Grid>
      <Grid item xs={8} md={6}>
        <TextField 
          label="TITULAR DO CARTÃO"
          name="personNameCard"
          formik={formik}
        />
      </Grid>
      <Grid item xs={4} md={6}>
        <TextField
          label="EXPIRA"
          name="expire"
          type="date"
          formik={formik}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField 
          label="CVV"
          name="cvv"
          formik={formik}
        />
      </Grid>
    </Grid>
  );
}

export default CreditCard;
