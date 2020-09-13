import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProductInformations from 'components/Product/Infomations';
import Layout from 'layout';
import { IProduct } from 'models/product';
import React from 'react';

import useStyles from './styles';

const product: IProduct = {
  _id: 'fnwhefphw-212en12-jfkene',
  title: 'Teclado Gamer 1',
  description: 'Teclado mecanico gamer, rgb',
  availableQty: 10,
  price: 200,
  imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3cDl3LBz_yvMu502yWuGG2OzqMqPfw7pnfQ4JENWA3bSkjNtVI-pVmHD3NLg1Oah3h7UYPrBifvY&usqp=CAc'
}

function ProductDetails() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4'>
            {product.title}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>
            <CardMedia
              image={product.imgUrl}
              title={product.title}
              className={classes.media}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} container spacing={1}>
          <ProductInformations product={product} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductDetails;
