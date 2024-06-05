const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    fav_styles: [Style]!
    made_styles: [Style]!
    followed_users: [User]!
  }

  type Style {
    _id: ID
    title: String
    style_Text: String
    creation_Date: String
    username: String
    tag:[String]!
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

      addStyle(title: String!, style_Text: String!, username: String!, tag: [String]): Style
      removeUser(styleId: ID!): Style
    } 
`;

module.exports = typeDefs;
