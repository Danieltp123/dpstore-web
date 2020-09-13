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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useStyles, { StyledBadge } from './styles';


function PageLayout(props: any)  {
  const classes = useStyles();
  const [productsInCard] = useShoppingCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(()=>{
    setTotal(calculateTotal(productsInCard));
  },[productsInCard])
  
  return (
    <>
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
              <StyledBadge badgeContent={productsInCard.length} color="primary">
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
      <Container classes={{ root: classes.container }}>
        {props.children}
      </Container>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Typography variant="subtitle2" className={classes.footer}>
            Daniel Teixeira Patrício © 2020
          </Typography>  
        </Toolbar>
      </AppBar>
    </>
  );
}

export default PageLayout;