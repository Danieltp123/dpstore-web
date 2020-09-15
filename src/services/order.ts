import gql from 'graphql-tag';


export const createOrder = gql`
  mutation addOrder( $newOrderData: NewOrderInput! ) {
    addOrder(newOrderData: $newOrderData){
      _id,
      creditCard,
      productsOrder{
        _id,
        title,
        description,
        productQty,
        price,
        imgUrl
      }
    }
  }
`