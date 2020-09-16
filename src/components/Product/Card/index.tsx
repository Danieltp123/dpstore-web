import { Tooltip } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import Toast from 'components/Toast';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React from 'react';
import { useMutation } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import { incrementInShoppingCart } from 'services/product';
import { addProductInCart } from 'stores/shoppingCart';

import ProductAvailableQty from '../ProductAvailableQty';
import useStyles from './styles';

interface IProps{
  product: IProduct;
}

export default function ProductCard(props: IProps) {
  const classes = useStyles();
  const history = useHistory();
  const [,dispatch] = useShoppingCart();
  const [handleIncrementInShoppingCart] = useMutation<IProduct>(
    incrementInShoppingCart
  );
  const { product } = props;

  const handleDetails = ()=>{
    history.push(`/detalhes/${product._id}`)
  }

  const handleAddInCart = () => {
    handleIncrementInShoppingCart({
      variables:{ _id: product._id }
    })
    .then((data)=>{
      console.log(data)
      dispatch(addProductInCart(product));
    })
    .catch(error =>{
      Toast.error(error);
    })
  }

  return (
    <Card className={classes.root}>
      <div onClick={handleDetails}>
        <CardMedia
          data-cy="card-image"
          className={classes.media}
          image={product.imgUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom data-cy="card-title" variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography data-cy="card-price" variant="h5">
            por {money.apply(product.price)}
          </Typography>
          <ProductAvailableQty product={product}/>
        </CardContent>
      </div>
      <Typography align="right" className={classes.iconButton}>
        <Tooltip title="Adicionar ao carrinho" aria-label="add" placement="left">
          <IconButton
            color="primary"
            data-cy="card-add-cart"
            disabled={(product.availableQty - product.inShoppingCart) < 1}
            onClick={handleAddInCart}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </Typography>
    </Card>
  );
}