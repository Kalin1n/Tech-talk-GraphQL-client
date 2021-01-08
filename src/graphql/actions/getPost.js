import { gql } from "@apollo/client";

export const GET_POST = gql`
  query getPost($title: String!) {
    getPost(title: $title) {
      title
      data
    }
  }
`;
