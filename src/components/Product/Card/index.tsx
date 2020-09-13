import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { addProductInCard } from 'stores/shoppingCart';

import useStyles from './styles';

interface IProps{
  product: IProduct;
}

export default function ProductCard(props: IProps) {
  const classes = useStyles();
  const history = useHistory();
  const [,dispatch] = useShoppingCart();
  const { product } = props;

  const handleDetails = ()=>{
    history.push(`/detalhes/${product._id}`)
  }

  const handleAddInCard = () => {
    dispatch(addProductInCard(product))
  }

  return (
    <Card className={classes.root}>
      <div onClick={handleDetails}>
        <CardMedia
          className={classes.media}
          image={product.imgUrl}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {money.apply(product.price)}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button 
          startIcon={<AddShoppingCartIcon />}
          size="small"
          color="primary"
          onClick={handleAddInCard}
          fullWidth
        >
          Adicionar ao carrrinho
        </Button>
      </CardActions>
    </Card>
  );
}