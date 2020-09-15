import Backdrop from '@material-ui/core/Backdrop';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProductInformations from 'components/Product/Infomations';
import Layout from 'layout';
import { IProduct } from 'models/product';
import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { findById } from 'services/product';

import useStyles from './styles';


function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery<{ product: IProduct }>(
    findById, 
    { 
      variables:{ 
        _id: id
      } 
    }
  );
  const product = data?.product;
  const classes = useStyles();

  return (
    <Layout>
      <Backdrop open={loading} className={classes.backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
      {product && (
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
          <Grid item xs={12} sm={6} container spacing={1} className={classes.productInfo}>
            <ProductInformations product={product} />
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}



export default ProductDetails;
