import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import { useShoppingCart } from 'components/ShoppingCart/Context';
import { calculateTotal } from 'helpers/calculateTotal';
import money from 'hooks/useMask/money';
import { IProduct } from 'models/product';
import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import { productsInShoppingCart } from 'services/product';
import { addProductsInCart } from 'stores/shoppingCart';

import useStyles, { StyledBadge } from './styles';

interface IProps {
  children: NonNullable<ReactNode>;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
}

function PageLayout({ children, maxWidth }: IProps)  {
  const classes = useStyles();
  const history = useHistory()
  const [{ data }, dispatch] = useShoppingCart();
  const [total, setTotal] = useState<number>(0);
  
  const fetchData = ({ productsInShoppingCart }: { productsInShoppingCart: IProduct[] }) => {
    console.log(productsInShoppingCart);
    dispatch(addProductsInCart(productsInShoppingCart));
  };

  useEffect(()=>{
    setTotal(calculateTotal(data));
  },[data]);

  const handleRedirectTo = (path: string) => () =>{
    history.push(path);
  }
  
  return (
    <Query onCompleted={fetchData} query={productsInShoppingCart}>
    {()=> (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography
              data-cy="header-logo"
              onClick={handleRedirectTo('/')}
              className={clsx([classes.title, classes.cursorPointer])}
              variant="h6"
            >
              LOGO
            </Typography>

            {Boolean(total) && (
              <Typography variant="h6" data-cy="header-price" className={classes.total}>
                {money.apply(total)}
              </Typography>
            )}
            <IconButton
              data-cy="header-cart"
              onClick={handleRedirectTo('/carrinho')}
              aria-label="carrinho de compras"
              color='inherit'
              className={classes.cursorPointer}
            >
              <StyledBadge data-cy="badge-cart" badgeContent={data.length} color="primary">
                <ShoppingCartIcon color="inherit" />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box height="30vh" className={classes.logo}>
          <Typography onClick={handleRedirectTo('/')} className={classes.cursorPointer} align='center' variant="h4">
            LOGO
          </Typography>
        </Box>
        <Container classes={{ root: classes.container }} maxWidth={maxWidth}>
          {children}
        </Container>
        <AppBar data-cy="footer-bar" position="static" color="secondary">
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