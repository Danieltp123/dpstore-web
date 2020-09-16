import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveIcon from '@material-ui/icons/Remove';
import Alert from 'components/Alert';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import Toast from 'components/Toast';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React from 'react';
import { useMutation } from 'react-apollo';
import { decrementInShoppingCart, incrementInShoppingCart, removeInShoppingCart } from 'services/product';
import { decrementQty, incrementQty, removeProductInCart } from 'stores/shoppingCart';

import useStyles from './styles';

interface IProps{
  product: IProduct;
}

export default function ListItemCart(props: IProps) {
  const { product } = props;
  const classes = useStyles();
  const [, dispatch] = useShoppingCart();

  const [handleDecrementInShoppingCart] = useMutation<{ decrementInShoppingCart: IProduct}>(
    decrementInShoppingCart
  );
  const [handleIncrementInShoppingCart] = useMutation<{ incrementInShoppingCart: IProduct}>(
    incrementInShoppingCart
  );
  const [handleRemoveInShoppingCart] = useMutation<IProduct>(
    removeInShoppingCart
  );
  
  const handleSub = async () => {
    handleDecrementInShoppingCart({
      variables:{ _id: product._id }
    }).then(()=>{
      dispatch(decrementQty(product._id));
    })
    .catch((error)=>{
      Toast.error(error);
    })
  }
  
  const handleAdd = () => {
    handleIncrementInShoppingCart({
      variables:{ _id: product._id }
    }).then(()=>{
      dispatch(incrementQty(product._id));
    }).catch((error)=>{
      Toast.error(error);
    })
  }
  
  const handleRemoveFromCart = async () => {
    const confirm = await Alert.confirm(`Deseja remover o produto '${product.title}' do carrinho?`)
    if(!confirm) return;
    handleRemoveInShoppingCart({
      variables:{ 
        _id: product._id
      }
    }).then(()=>{
      dispatch(removeProductInCart(product._id));
    }).catch((error)=>{
      Toast.error(error);
    })
  }

  return (
    <ListItem data-cy={`li-cart-${product._id}`}>
      <ListItemIcon>
        <IconButton data-cy="remove-product-btn" onClick={handleRemoveFromCart} size="small">
          <CancelIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          variant="square"
          alt={product.title}
          src={product.imgUrl}
        />
      </ListItemAvatar>
      <ListItemText 
        primary={product.title} 
        secondary={money.apply(product.price)} 
      />
      <ListItemSecondaryAction className={classes.actions}>
        <IconButton 
          disabled={product.inShoppingCart < 2}
          color='default'
          size="small"
          data-cy="sub-product-qty"
          onClick={handleSub}
        >
          <RemoveIcon />
        </IconButton>
        <Typography data-cy="product-qty" color="textPrimary" variant="subtitle1">
          {product.inShoppingCart}
        </Typography>
        <IconButton data-cy="add-product-qty" color='default' size="small" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}