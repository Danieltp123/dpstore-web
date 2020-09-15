import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import Toast from 'components/Toast';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React from 'react';
import { useMutation } from 'react-apollo';
import { incrementInShoppingCart } from 'services/product';
import { addProductInCart } from 'stores/shoppingCart';

import ProductAvailableQty from '../ProductAvailableQty';

interface IProps {
  product: IProduct;
}

export default function ProductInformations(props: IProps) {
  const { product } = props;
  const [,dispatch] = useShoppingCart();
  const [handleIcrementAvailableQty] = useMutation<IProduct>(
    incrementInShoppingCart
  );

  const handleAddInCart = async () => {
    handleIcrementAvailableQty({
      variables:{ _id: product._id }
    }).then(()=>{
      dispatch(addProductInCart(product));
    }).catch(error=> {
      Toast.error(error);
    })
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='body1' gutterBottom>
          {product.description}<br />
        </Typography>
        <Typography variant="h5">
          por {money.apply(product.price)}
        </Typography>
        <ProductAvailableQty product={product}/>
        <Typography align="center">
          <Button 
            startIcon={<AddShoppingCartIcon />}
            size="large"
            color='primary'
            variant='contained'
            disabled={(product.availableQty - product.inShoppingCart) < 1}
            onClick={handleAddInCart}
          >
            Adicionar ao carrinho
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
