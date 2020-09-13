import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React from 'react';
import { addProductInCard } from 'stores/shoppingCart';

import useStyles from './styles';

interface IProps {
  product: IProduct;
}

export default function ProductInformations(props: IProps) {
  const classes = useStyles();
  const { product } = props;
  const [,dispatch] = useShoppingCart();

  const handleAddInCard = () => {
    dispatch(addProductInCard(product))
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='body1' style={{ flexGrow: 1, width: '100%' }} gutterBottom>
          {product.description}<br />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' style={{ flexGrow: 1, width: '100%' }}>
          Preço: {money.apply(product.price)}<br />
          Disponível: {product.availableQty} unidade(s)
        </Typography>
      </Grid>
      <Grid item className={classes.buttonGrid} xs={12}>
        <Button 
          startIcon={<AddShoppingCartIcon />}
          size="large"
          color='primary'
          variant='contained'
          onClick={handleAddInCard}
        >
          Adicionar ao carrinho
        </Button>
      </Grid>
    </>
  );
}
