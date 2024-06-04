const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    fav_styles: [Style]!
    made_styles: [Style]!
    curators: [User]!
  }

  type Style {
    _id: ID
    fileName: String
    data: String
    tags:[String]!
    user: User
    creation_Date: String
  }

  type Query {
      users: [User]!
      user(userId: ID!): User

      styles: [Style]!
      style(styleId: ID!): Style
    }

    type Mutation {
      addUser(username: String!, email: String!, password: String!): User
      removeUser(userId: ID!): User

      #Not certain which fields will be required or optional
      addStyle(): Style
      removeUser(styleId: ID!): Style

    } 
`;

module.exports = typeDefs;
