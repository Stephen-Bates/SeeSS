import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
        fav_styles
        made_styles
        followed_users
    }
}
`;

export const REMOVE_USER = gql`
mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
        _id
        username
        email
        password
        fav_styles
        made_styles
        followed_users
    }
}
`;

export const ADD_STYLE = gql`
mutation addStyle() {
    addStyle() {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;

export const REMOVE_STYLE = gql`
mutation removeStyle($styleId: ID!) {
    removeStyle(styleId: $styleId) {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;