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
        curators
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
        curators
    }
}
`;

export const QUERY_STYLES = gql`
query allStyles {
    styles {
        _id
        styleText
        creation_Date
        username
        tags
    }
}
`;

export const QUERY_SINGLE_STYLE = gql`
query singleStyle($styleId: ID!) {
    style(styleId: $styleId) {
        _id
        styleText
        creation_Date
        username
        tags
    }
}
`;