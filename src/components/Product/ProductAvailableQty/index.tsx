import Typography from '@material-ui/core/Typography';
import { IProduct } from 'models/product';
import React from 'react';

interface IProps {
  product: IProduct;
}

export default function ProductAvailableQty(props: IProps) {
  const { product } = props;

  return (
    <>
      {(product.availableQty - product.inShoppingCart) > 0 ?
        (
          <Typography gutterBottom>
            Disponível: {product.availableQty - product.inShoppingCart} unidade(s)
          </Typography>
        ):
        (
          <Typography color="error" gutterBottom>
            (indisponível)
          </Typography>
        )
      }
    </>
  );
}
