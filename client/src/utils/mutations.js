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
        curators
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
        curators
    }
}
`;

export const ADD_STYLE = gql`
mutation addStyle() {
    addStyle() {
        _id
        styleText
        creation_Date
        username
        tags
    }
}
`;

export const REMOVE_STYLE = gql`
mutation removeStyle($styleId: ID!) {
    removeStyle(styleId: $styleId) {
        _id
        styleText
        creation_Date
        username
        tags
    }
}
`;