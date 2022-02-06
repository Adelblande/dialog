import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Friend {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }

  type User {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [Friend!]!
    greeting: String
  }

  type Query {
    list(name: String): [User]!
    details(_id: ID): User
  }
`;

export default typeDefs;
