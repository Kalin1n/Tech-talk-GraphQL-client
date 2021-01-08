import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://gql-tech-talk-server.herokuapp.com",
  cache: new InMemoryCache(),
});

export default client;
