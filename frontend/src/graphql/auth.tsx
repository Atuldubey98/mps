import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      _id
      email
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`;
export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      email
      _id
    }
  }
`;
