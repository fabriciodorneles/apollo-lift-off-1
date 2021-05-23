const {gql} = require('apollo-server');

const typeDefs = gql`
    "Query to get tracks array for the homepage grid"
    type Query {
        tracksForHome: [Track!]!
    }
    "A track is a group of modules that teaches a specific topic"
    type Track{
        id: ID!
        "The track's Title"
        title: String!
        "The track's main Author"
        author: Author!
        "The track's main illustration"
        thumbnail: String
        "The track's length in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }
`;

module.exports = typeDefs;
