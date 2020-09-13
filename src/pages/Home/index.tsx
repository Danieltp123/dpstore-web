import Grid from '@material-ui/core/Grid';
import ProductCard from 'components/Product/Card';
import Layout from 'layout';
import { IProduct } from 'models/product';
import React from 'react';

const mock: IProduct[] = [
  {
    _id: 'fnwhefphw-212en12-jfkene',
    title: 'Teclado Gamer 1',
    description: 'Teclado mecanico gamer, rgb',
    availableQty: 10,
    price: 200,
    imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRYhDWSSEQpE_o4BFhxAhW_BDYoPIz5jFKZQjaLZUHPnl8tlROKQpORt4q3OrXMgPbDw3V1ou1-xw&usqp=CAc'
  },
  {
    _id: 'fnwhefphw-212en12-wfnlew',
    title: 'Teclado Gamer 2',
    description: 'Teclado mecanico gamer, rgb',
    availableQty: 10,
    price: 200,
    imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRYhDWSSEQpE_o4BFhxAhW_BDYoPIz5jFKZQjaLZUHPnl8tlROKQpORt4q3OrXMgPbDw3V1ou1-xw&usqp=CAc'
  },
  {
    _id: 'fnwhefphw-212en12-ded',
    title: 'Teclado Gamer 3',
    description: 'Teclado mecanico gamer, rgb',
    availableQty: 10,
    price: 200,
    imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRYhDWSSEQpE_o4BFhxAhW_BDYoPIz5jFKZQjaLZUHPnl8tlROKQpORt4q3OrXMgPbDw3V1ou1-xw&usqp=CAc'
  },
  {
    _id: 'fnwhefphw-212en12-wef',
    title: 'Teclado Gamer 4',
    description: 'Teclado mecanico gamer, rgb',
    availableQty: 10,
    price: 200,
    imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRYhDWSSEQpE_o4BFhxAhW_BDYoPIz5jFKZQjaLZUHPnl8tlROKQpORt4q3OrXMgPbDw3V1ou1-xw&usqp=CAc'
  }
]

function Home() {
  return (
    <Layout>
      <Grid container>
        {mock.map(item=>(
          <Grid key={item._id} item xs={12} sm={6} md={4} xl={3}>
            <ProductCard product={item}/>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Home;
