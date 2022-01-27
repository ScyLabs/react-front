import { gql } from "@apollo/client";

export const GET_TODO_LIST = gql`
  query {
    showList {
      name
      value
      _id
      color
    }
  }
`;

export const CREATE_TODO = gql`
  mutation ($input: ListItemInput!) {
    addToList(input: $input) {
      name
      value
      _id
      color
    }
  }
`;
