import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query Students {
    students {
      firstName
      class
      lastName
      rollNumber
      _id
    }
  }
`;
