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
import money from 'hooks/useMask/money';
import { IProductInCard } from 'models/product';
import React from 'react';
import { decrementQty, incrementQty, removeProductInCard } from 'stores/shoppingCart';

import useStyles from './styles';

interface IProps{
  product: IProductInCard;
}

export default function ListItemCart(props: IProps) {
  const { product } = props;
  const classes = useStyles();
  const [, dispatch] = useShoppingCart();

  const handleAdd = () => {
    dispatch(incrementQty(product._id));
  }
  
  const handleSub = () => {
    dispatch(decrementQty(product._id));
  }

  const handleDelete = async () => {
    const confirm = await Alert.confirm(`Deseja remover o produto '${product.title}' do carrinho?`)
    if(confirm) dispatch(removeProductInCard(product._id));
  }

  return (
    <ListItem button>
      <ListItemIcon>
        <IconButton onClick={handleDelete} size="small">
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
          disabled={product.productQty < 2}
          color='default'
          size="small"
          onClick={handleSub}
        >
          <RemoveIcon />
        </IconButton>
        <Typography color="textPrimary" variant="subtitle1">
          {product.productQty}
        </Typography>
        <IconButton color='default' size="small" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}