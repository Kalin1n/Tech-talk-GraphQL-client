import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($name: String!) {
    getUser(name: $name) {
      id
      posts {
        id
        title
      }
    }
  }
`;
