import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            password
            fav_styles
            made_styles
            followed_users
        }
    }
}
`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
        token
        user{
            _id
            username
            email
            password
            fav_styles
            made_styles
            followed_users
        }
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

export const UPDATE_STYLE = gql`
mutation updateStyle($styleId: ID!, $title: String!, $style_Text: String!) {
    updateStyle(styleId: $styleId, title: $title, style_Text: $style_Text) {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;

export const ADD_STYLE_TAGS = gql`
mutation addStyleTags($styleId: ID!, $tags: [String]!) {
    addStyleTags(styleId: $styleId, tags: $tags) {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;

export const REMOVE_STYLE_TAGS = gql`
mutation removeStyleTags($styleId: ID!, $tags: [String]!) {
    removeStyleTags(styleId: $styleId, tags: $tags) {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;