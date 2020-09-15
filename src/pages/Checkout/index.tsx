import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import OrderInfo from 'components/OrderInfo';
import OrderSummary from 'components/OrderSummary';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import Toast from 'components/Toast';
import { Form, Formik, FormikHelpers } from 'formik';
import Layout from 'layout';
import { IOrder } from 'models/order';
import React from 'react';
import { useMutation } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import { createOrder } from 'services/order';
import { resetProductInCart } from 'stores/shoppingCart';
import * as Yup from 'yup';

import useStyles from './styles';

export interface Values {
  creditCard: string;
}

const validationSchema = Yup.object().shape({
  creditCard: Yup.string()
    .required('Campo obrigatório')
    .min(16,'Formato inválido')
    .max(16,'Formato inválido')
});

function ShoppingCart() {
  const history = useHistory();
  const classes = useStyles();
  const [{ data },dispatch] = useShoppingCart();
  const smDown = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
  
  const [handleCreateOrder] = useMutation<IOrder>(
    createOrder
  );

  const initialValues = {
    creditCard: ''
  };

  const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    actions.setSubmitting(true);
    handleCreateOrder({
      variables: { 
        newOrderData: {
          ...values,
          productsOrder: data.map(({ _id, inShoppingCart }) => ({ 
            productId: _id,
            productQty: inShoppingCart
          }))
        } 
      }
    }).then(()=>{
      Toast.show("Pedido salvo com sucesso");
      history.push('/');
      actions.resetForm();
      dispatch(resetProductInCart());
    }).catch(error=>{
      Toast.error(error);
    }).then(()=>{
      actions.setSubmitting(false);
    });

  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Backdrop open={isSubmitting} className={classes.backdrop}>
              <CircularProgress color="primary" />
            </Backdrop>
            <Grid container justify={smDown ? "flex-start" : "center"}>
              <Grid item xs={12} md={6}>
                <OrderInfo />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <OrderSummary />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default ShoppingCart;
