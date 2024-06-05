import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
query allUsers {
    users {
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

export const QUERY_SINGLE_USER = gql`
query singleUser($userId: ID!) {
    user(userId: $userId) {
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

export const QUERY_STYLES = gql`
query allStyles {
    styles {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;

export const QUERY_SINGLE_STYLE = gql`
query singleStyle($styleId: ID!) {
    style(styleId: $styleId) {
        _id
        title
        style_Text
        creation_Date
        username
        tag
    }
}
`;