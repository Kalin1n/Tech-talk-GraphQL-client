import { gql } from "@apollo/client";

export const CREATE_USER_AND_LOGIN = gql`
  mutation createUserAndLogIn($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
      name
      id
    }
    login(name: $name, password: $password)
  }
`;
