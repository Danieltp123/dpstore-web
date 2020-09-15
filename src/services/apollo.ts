import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client;