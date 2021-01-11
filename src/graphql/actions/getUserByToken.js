import { gql } from "@apollo/client";

export const GET_USER_BY_TOKEN = gql`
  query getUserByToken($token: String!) {
    getUserByToken(token: $token) {
      id
      name
    }
  }
`;
