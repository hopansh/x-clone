import { graphql } from "../../gql";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query verifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  query getCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageUrl
      tweets {
        id
        content
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      email
      firstName
      lastName
      profileImageUrl
      tweets {
        id
        content
      }
    }
  }
`);
