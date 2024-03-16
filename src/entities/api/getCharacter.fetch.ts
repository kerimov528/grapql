import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

export { GET_CHARACTER };
