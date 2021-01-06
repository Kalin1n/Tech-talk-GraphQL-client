import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password)
  }
`;
