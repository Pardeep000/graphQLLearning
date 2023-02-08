const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type user {
    id: Int!
    name: String!
    job: String!
  }

  type Query {
    getuser: [user]
    getbyid(id: Int!): user
  }

  type Mutation {
    adduser(id: Int!, name: String!, job: String!): user
  }
`;

module.exports = { typeDefs };
//   type Query {
//     getuser: [user!]!
//   }

//   type Mutation {
//     adduser(id: Int!, name: String!, job: String!): user!
//   }
