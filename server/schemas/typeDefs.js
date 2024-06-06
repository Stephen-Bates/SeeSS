const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    fav_styles: [Style]
    made_styles: [Style]
    followed_users: [User]
  }

  type Style {
    _id: ID!
    title: String!
    style_Text: String!
    creation_Date: String
    username: String!
    tag:[String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
      users: [User]!
      user(userId: ID!): User
      me: User

      styles: [Style]!
      style(styleId: ID!): Style
      myStyles: [Style]!
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      removeUser(userId: ID!): User

      addStyle(title: String!, style_Text: String!, tag: [String]): Style
      removeStyle(styleId: ID!): Style
updateStyle(styleId: ID!, title: String!, style_Text: String!, tag: [String!]!): Style
      addStyleTags(styleId: ID!, tags: [String]!): Style
      removeStyleTags(styleId: ID!, tags: [String]!): Style
    } 
`;

module.exports = typeDefs;
