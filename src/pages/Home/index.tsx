import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ProductCard from 'components/Product/Card';
import Layout from 'layout';
import { IProduct } from 'models/product';
import React from 'react';
import { useQuery } from 'react-apollo';
import { findAll } from 'services/product';

import useStyles from './styles';

function Home() {
  const { data, loading } = useQuery<{ products: IProduct[] }>(findAll);
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Backdrop open={loading} data-cy='loading-backdrop' className={classes.backdrop}>
          <CircularProgress data-cy='loading-circularprogress' color="primary" />
        </Backdrop>
        {!loading && data?.products?.map((item)=>(
          <Grid key={item._id} data-cy={`pl-item-${item._id}`} item xs={12} sm={6} md={4} xl={3}>
            <ProductCard data-cy={`card-item-${item._id}`} product={item}/>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}


export default Home;
