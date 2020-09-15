import gql from 'graphql-tag';

export const findAll = gql`
  query {
    products {
      _id,
      title,
      description,
      availableQty,
      inShoppingCart,
      price,
      imgUrl
    }
  }
`

export const productsInShoppingCart = gql`
  query{
    productsInShoppingCart{
      _id,
      title,
      description,
      availableQty,
      inShoppingCart,
      price,
      imgUrl
    }
  }
`

export const findById = gql`
  query findById($_id: String!) {
    product(_id: $_id){
      _id,
      title,
      description,
      availableQty,
      inShoppingCart,
      price,
      imgUrl
    }
  }
`

export const decrementInShoppingCart = gql`
  mutation decrementInShoppingCart($_id: String!) {
    decrementInShoppingCart(_id: $_id){
      _id,
      title,
      description,
      availableQty,
      inShoppingCart,
      price,
      imgUrl
    }
  }
`

export const incrementInShoppingCart = gql`
  mutation incrementInShoppingCart($_id: String!) {
    incrementInShoppingCart(_id: $_id){
      _id,
      title,
      description,
      availableQty,
      inShoppingCart,
      price,
      imgUrl
    }
  }
`

export const removeInShoppingCart = gql`
  mutation removeInShoppingCart($_id: String!) {
    removeInShoppingCart(_id: $_id){
      _id,
      inShoppingCart
    }
  }
`