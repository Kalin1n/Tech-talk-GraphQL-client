import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($title: String!, $data: String!, $token: String!) {
    createPost(title: $title, data: $data, token: $token) {
      id
    }
  }
`;
