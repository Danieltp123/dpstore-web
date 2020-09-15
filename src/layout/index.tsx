import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import { calculateTotal } from 'helpers/calculateTotal';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { productsInShoppingCart } from 'services/product';
import { addProductsInCart } from 'stores/shoppingCart';

import useStyles, { StyledBadge } from './styles';

interface IProps {
  children: NonNullable<ReactNode>;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
}

function PageLayout({ children, maxWidth }: IProps)  {
  const classes = useStyles();
  const [{ data }, dispatch] = useShoppingCart();
  const [total, setTotal] = useState<number>(0);
  
  const fetchData = ({ productsInShoppingCart }: { productsInShoppingCart: IProduct[] }) => {
    console.log(productsInShoppingCart);
    dispatch(addProductsInCart(productsInShoppingCart));
  };

  useEffect(()=>{
    setTotal(calculateTotal(data));
  },[data])
  
  return (
    <Query onCompleted={fetchData} query={productsInShoppingCart}>
    {()=> (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Link to='/' className={classes.title}>
              <Typography variant="h6">
                LOGO
              </Typography>
            </Link>
            {Boolean(total) && (
              <Typography variant="h6" className={classes.total}>
                {money.apply(total)}
              </Typography>
            )}
            <Link to='/carrinho'>
              <IconButton aria-label="cart" color='inherit'>
                <StyledBadge badgeContent={data.length} color="primary">
                  <ShoppingCartIcon color="inherit" />
                </StyledBadge>
              </IconButton>    
            </Link>
          </Toolbar>
        </AppBar>
        <Box height="30vh" className={ classes.logo }>
          <Link to='/'>
            <Typography align='center' variant="h4">
              LOGO
            </Typography>
          </Link>
        </Box>
        <Container classes={{ root: classes.container }} maxWidth={maxWidth}>
          {children}
        </Container>
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <Typography variant="subtitle2" className={classes.footer}>
              Daniel Teixeira Patrício © 2020
            </Typography>  
          </Toolbar>
        </AppBar>
      </Fragment>
    )}
    </Query>
  );
}

export default PageLayout;